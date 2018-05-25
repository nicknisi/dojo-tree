import { v, w } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import WidgetBase from '@dojo/widget-core/WidgetBase';

import * as css from './styles/treeView.m.css';

interface TreeRowProperties {
  data: any;
  index: number[];
  additionalCss: string;
  expanded: boolean;
  onExpand: (key: string) => void;
}

export class TreeRow extends WidgetBase<TreeRowProperties> {
  private _toggleDepth(key: any) {
    this.properties.onExpand(key);
  }

  protected render() {
    const { index, data, additionalCss, expanded } = this.properties;
    const key = index.join('_');

    return v('tr', {key}, [
      v('td', { colSpan: 6 }, [
        v('div', { classes: [css.collapsableColumn, additionalCss ] }, [
          v('div', { onclick: () => this._toggleDepth(key), classes: css.toggler }, [
            expanded ? 'v' : '>'
          ]),
          data.name
        ])
      ])
    ])
  }
}

interface TreeProperties {
  data: any[];
}

export default class TreeView extends WidgetBase<TreeProperties> {
  private expandedIndexes: { [key: string]: boolean } = {};

  private _onExpand = (key: string) => {
    this.expandedIndexes[key] = !this.expandedIndexes[key];
    this.invalidate();
  }

  protected render(): DNode {
    const { data } = this.properties;
    const rows = data.reduce((rows, data: any, index: number) => {
      const { children = [] } = data;
      const onExpand = this._onExpand;
      return [
        ...rows,
        w(TreeRow, { key: index, onExpand, expanded: this.expandedIndexes[index], data, index: [index], additionalCss: css.first }),
        ...(!this.expandedIndexes[index] ? [] : children.map((child: any, i: number) => w(TreeRow, {
          onExpand,
          expanded: this.expandedIndexes[[index, i].join('_')],
          index: [ index, i ],
          key: [ index, i ].join('_'),
          data: child,
          additionalCss: css.second
        })))
      ];
    }, []);

    return v('div', {}, [
      v('h2', ['Example tree view']),
      v('table', {}, [ v('tbody', rows) ])
    ]);
  }
}
