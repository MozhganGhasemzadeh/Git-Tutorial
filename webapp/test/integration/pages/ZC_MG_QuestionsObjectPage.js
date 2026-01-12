sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'gittutorialproject',
            componentId: 'ZC_MG_QuestionsObjectPage',
            contextPath: '/ZC_MG_Questions'
        },
        CustomPageDefinitions
    );
});