import { v, w } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import WidgetBase from '@dojo/widget-core/WidgetBase';

import * as css from './styles/treeView.m.css';

interface TreeRowProperties {
  data: any;
  index: string[];
  additionalCss: string;
}

class TreeRow extends WidgetBase<TreeRowProperties> {

  private expandedIndexes: { [key: string]: boolean };

  constructor() {
    super();
    this.expandedIndexes = {};
  }

  private _toggleDepth(key: any) {
    console.log(key);
    this.expandedIndexes[key] = !this.expandedIndexes[key];
    this.invalidate();
  }

  private _renderInDept(): DNode {
    const {data, index, additionalCss} = this.properties;
    const key = index.join('_');
    const childSelected = this.expandedIndexes[key];

    return v('tr', {key}, [
      v('td', {colSpan: 6}, [
        v('div', {classes: [css.collapsableColumn, additionalCss]}, [
          v('div', {onclick: () => this._toggleDepth(key), classes: css.toggler}, [
            childSelected ? 'v' : '>'
          ]),
          data.name
        ])
      ])
    ]);
  }

  protected render(): DNode | DNode[] {
    const {data, index} = this.properties;
    const key = index.join('_');
    const childSelected = this.expandedIndexes[key];
    const childRows: DNode[] = [];
    if (childSelected && data.children) {
      data.children.forEach((children: any, indexLevel: any) => {
        const newIndex = [index, indexLevel];
        childRows.push(w(TreeRow, {
          key: newIndex.join('_'),
          data: children,
          index: newIndex,
          additionalCss: css.second
        }));
      });
    }
    return v('div', [this._renderInDept()].concat(childRows));
  }
}

interface TreeProperties {
  data: any[];
}

export default class TreeView extends WidgetBase<TreeProperties> {

  private _renderTableBody(): DNode[] {
    const rows: any = [];
    this.properties.data.forEach((children: any, idx: any) => {
      // renders the root rows of the tree.
      rows.push(w(TreeRow, {data: children, index: [idx], key: idx, additionalCss: css.first}));
    });
    return rows;
  }

  protected render(): DNode {
    return v('div', {}, [
      v('h2', ['Example tree view']),
      v('table', {}, [v('tbody', this._renderTableBody())])
    ]);
  }
}
