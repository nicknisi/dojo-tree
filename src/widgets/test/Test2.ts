import { Outlet } from '@dojo/routing/Outlet';
import { v } from '@dojo/widget-core/d';
import WidgetBase from '@dojo/widget-core/WidgetBase';

export const test2OutletName = 'test2';

class Test2 extends WidgetBase {
  protected render() {
    return v('div', ['Test view 2']);
  }
}

const Test2Outlet = Outlet({index: Test2}, test2OutletName);

export default Test2Outlet;
