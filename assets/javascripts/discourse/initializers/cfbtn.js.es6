import {withPluginApi} from 'discourse/lib/plugin-api';
import {onToolbarCreate} from 'discourse/components/d-editor';

function addButtons(siteSettings) {
  if (siteSettings.cfbtn_plugin_enabled) {
    //openHAB items syntax button
    if (siteSettings.cfbtn_openhab_items) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_title_openhab_items",
          group: "extras",
          icon: "file-text-o",
          perform: e => e.applySurround('``` csv', '```', 'cfbtn_dtext_openhab_items')
        });
      });
    }
    //openHAB rules syntax button
    if (siteSettings.cfbtn_openhab_rules) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_title_openhab_rules",
          group: "extras",
          icon: "file-code-o",
          perform: e => e.applySurround('\n``` php\n', '\n```\n', 'cfbtn_dtext_openhab_rules')
        });
      });
    }
    //openHAB sitemap syntax button
    if (siteSettings.cfbtn_openhab_sitemap) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cfbtn_title_openhab_sitemap",
          group: "extras",
          icon: "file-image-o",
          perform: e => e.applySurround('\n``` php\n', '\n```\n', 'cfbtn_dtext_openhab_sitemap')
        });
      });
    }
  }
}

function priorToApi(container) {
  const siteSettings = container.lookup('site-settings:main');
  addButtons(siteSettings);
}

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');
  addButtons(siteSettings);
}

export default {
  name: 'cfbtn',
  initialize(container) {
    withPluginApi('0.1', api => initializePlugin(api), {
      noApi: () => priorToApi(container)
    });
  }
};
