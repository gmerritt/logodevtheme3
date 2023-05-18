import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the logodevtheme3 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'logodevtheme3:plugin',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension logodevtheme3 is activated!');
    const style = 'logodevtheme3/index.css';

    manager.register({
      name: 'logodevtheme3',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
