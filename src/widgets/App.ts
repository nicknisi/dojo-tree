import { v, w } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';
import Button from '@dojo/widgets/button';
import { router } from '../main';
import TestOutlet, { testOutletName } from './test/Test';
import Test2Outlet, { test2OutletName } from './test/Test2';

/**
 * A "Hello World" widget that renders a spinning Dojo 2 logo and the text "Hello, Dojo 2 World!".
 *
 * Refer to the creating widgets tutorial for help: https://dojo.io/tutorials/003_creating_widgets/
 */
export class App extends WidgetBase {
  private navigate(outlet: string) {
    const link = router.link(outlet, {id: '1'});
    if (link) {
      router.setPath(link);
    }
  }

  protected render() {
    return v('div', [
      w(Button, {onClick: () => this.navigate(testOutletName)}, ['Test 1']),
      w(Button, {onClick: () => this.navigate(test2OutletName)}, ['Test 2']),
      w(TestOutlet, {}),
      w(Test2Outlet, {})
    ]);
  }
}

export default App;
