import { Outlet } from '@dojo/routing/Outlet';
import { v, w } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';
import TreeView from './TreeView';

export const treeContainerOutletName = 'treeView';

class TreeContainer extends WidgetBase {
  private tableData = [
    {name: '0. First Level in Tree', children: [{name: '0.0. Second Level in Tree'}, {name: '0.1. Second Level in Tree'}]},
    {name: '1. First Level in Tree', children: [{name: '1.0. Second Level in Tree'}, {name: '1.1. Second Level in Tree'}]},
    {name: '2. First Level in Tree', children: [{name: '2.0. Second Level in Tree'}, {name: '2.1. Second Level in Tree'}]},
    {name: '3. First Level in Tree', children: [{name: '3.0. Second Level in Tree'}, {name: '3.1. Second Level in Tree'}]},
    {name: '4. First Level in Tree', children: [{name: '4.0. Second Level in Tree'}, {name: '4.1. Second Level in Tree'}]},
    {name: '5. First Level in Tree', children: [{name: '5.0. Second Level in Tree'}, {name: '5.1. Second Level in Tree'}]},
    {name: '6. First Level in Tree', children: [{name: '6.0. Second Level in Tree'}, {name: '6.1. Second Level in Tree'}]},
    {name: '7. First Level in Tree', children: [{name: '7.0. Second Level in Tree'}, {name: '7.1. Second Level in Tree'}]},
    {name: '8. First Level in Tree', children: [{name: '8.0. Second Level in Tree'}, {name: '8.1. Second Level in Tree'}]},
    {name: '9. First Level in Tree', children: [{name: '9.0. Second Level in Tree'}, {name: '9.1. Second Level in Tree'}]}
  ];

  protected render() {

    return v('div', [
      w(TreeView, {data: this.tableData}),
    ]);
  }
}

const TreeContainerOutlet = Outlet({index: TreeContainer}, treeContainerOutletName);

export default TreeContainerOutlet;

