import {withPluginApi} from 'discourse/lib/plugin-api';
import {onToolbarCreate} from 'discourse/components/d-editor';

function addButtons(siteSettings) {
  if (siteSettings.codefence_buttons_enabled) {
    //openHAB items syntax button
    if (siteSettings.openhab_cf_items_button_enabled) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cf_ohitems_button_title",
          group: "extras",
          icon: "file-code-o",
          perform: e => e.applySurround('``` csv', '```', 'cf_ohitems_default_text')
        });
      });
    }
    //openHAB rules syntax button
    if (siteSettings.openhab_cf_rules_button_enabled) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cf_ohrules_button_title",
          group: "extras",
          icon: "file-code-o",
          perform: e => e.applySurround('\n``` php\n', '\n```\n', 'cf_ohrules_default_text')
        });
      });
    }
    //openHAB sitemap syntax button
    if (siteSettings.openhab_cf_sitemap_button_enabled) {
      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: "cf_ohsitemap_button_title",
          group: "extras",
          icon: "file-code-o",
          perform: e => e.applySurround('\n``` php\n', '\n```\n', 'cf_ohsitemap_default_text')
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
  name: 'codefences_buttons',
  initialize(container) {
    withPluginApi('0.1', api => initializePlugin(api), {
      noApi: () => priorToApi(container)
    });
  }
};
