import { Outlet } from '@dojo/routing/Outlet';
import { v, w } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';
import TreeView from './NewTreeView';

export const treeContainerOutletName = 'treeView';

export const generateData = (count = 10) => {
  const data = [];
  for (let i = 0; i < count; ++i) {
    data.push({
      name: `${i}. First Level in Tree`,
      children: [
        { name: `${i}.0. Second Level in Tree` },
        { name: `${i}.1. Second Level in Tree` }
      ]
    });
  }

  return data;
};

class TreeContainer extends WidgetBase {
  private tableData = generateData(2500);

  protected render() {

    return v('div', [
      w(TreeView, {data: this.tableData}),
    ]);
  }
}

const TreeContainerOutlet = Outlet({index: TreeContainer}, treeContainerOutletName);

export default TreeContainerOutlet;

