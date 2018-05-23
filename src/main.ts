import { RouteConfig } from '@dojo/routing/interfaces';
import { registerRouterInjector } from '@dojo/routing/RouterInjector';
import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { App } from './widgets/App';
import { testOutletName } from './widgets/test/Test';
import { test2OutletName } from './widgets/test/Test2';
import { treeContainerOutletName } from './widgets/treeview/TreeContainer';

const config: RouteConfig[] = [
  {
    path: 'test2',
    outlet: test2OutletName,
    defaultRoute: true,
  }, {
    path: 'test1',
    outlet: testOutletName,
    children: [{
      path: 'treeView',
      outlet: treeContainerOutletName
    }]
  }
];

const registry = new Registry();
export const router = registerRouterInjector(config, registry);

// Create a projector to convert the virtual DOM produced by the application into the rendered page.
// For more information on starting up a Dojo 2 application, take a look at
// https://dojo.io/tutorials/002_creating_an_application/
const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({registry});

// By default, append() will attach the rendered content to document.body.  To insert this application
// into existing HTML content, pass the desired root node to append().
projector.append();
