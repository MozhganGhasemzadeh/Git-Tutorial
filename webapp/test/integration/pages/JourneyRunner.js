sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"gittutorialproject/test/integration/pages/ZC_MG_QuestionsList",
	"gittutorialproject/test/integration/pages/ZC_MG_QuestionsObjectPage"
], function (JourneyRunner, ZC_MG_QuestionsList, ZC_MG_QuestionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('gittutorialproject') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_MG_QuestionsList: ZC_MG_QuestionsList,
			onTheZC_MG_QuestionsObjectPage: ZC_MG_QuestionsObjectPage
        },
        async: true
    });

    return runner;
});

