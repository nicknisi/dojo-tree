import { Outlet } from '@dojo/routing/Outlet';
import { w } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';
import Button from '@dojo/widgets/button';
import { router } from '../../main';
import TreeContainerOutlet, { treeContainerOutletName } from '../treeview/TreeContainer';

export const testOutletName = 'test1';

class Test extends WidgetBase {

  private navigate(outlet: string) {
    const link = router.link(outlet, {id: '1'});
    if (link) {
      router.setPath(link);
    }
  }
  protected render() {
    return [
      w(Button, {onClick: () => this.navigate(treeContainerOutletName)}, ['TreeView']),
      w(TreeContainerOutlet, {})
    ]
  }
}

const TestOutlet = Outlet({main: Test}, testOutletName);

export default TestOutlet;
