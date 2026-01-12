sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'gittutorialproject',
            componentId: 'ZC_MG_QuestionsList',
            contextPath: '/ZC_MG_Questions'
        },
        CustomPageDefinitions
    );
});