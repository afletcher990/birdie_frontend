global.fetch = jest.fn((url) => {
    if (url === '/getCareRecipients') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    body: JSON.stringify([
                        {"care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "name": "Keri Wolf"},
                        {"care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227", "name": "Zahra Povey"},
                        {"care_recipient_id": "ad3512a6-91b1-4d7d-a005-6f8764dd0111", "name": "Montana Dickens"}
                    ]),
                });
            }, 1000);
        });
    }
    if (url === '/getDatesWithVisits') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    body: JSON.stringify([
                        {"date": "2019-04-22T23:00:00.000Z"},
                        {"date": "2019-04-23T23:00:00.000Z"},
                        {"date": "2019-04-24T23:00:00.000Z"},
                        {"date": "2019-04-25T23:00:00.000Z"},
                        {"date": "2019-04-26T23:00:00.000Z"},
                        {"date": "2019-04-27T23:00:00.000Z"},
                        {"date": "2019-04-28T23:00:00.000Z"},
                        {"date": "2019-04-29T23:00:00.000Z"},
                        {"date": "2019-04-30T23:00:00.000Z"},
                        {"date": "2019-05-01T23:00:00.000Z"},
                        {"date": "2019-05-02T23:00:00.000Z"},
                        {"date": "2019-05-03T23:00:00.000Z"},
                        {"date": "2019-05-04T23:00:00.000Z"},
                        {"date": "2019-05-05T23:00:00.000Z"},
                        {"date": "2019-05-06T23:00:00.000Z"},
                        {"date": "2019-05-07T23:00:00.000Z"},
                        {"date": "2019-05-08T23:00:00.000Z"},
                        {"date": "2019-05-09T23:00:00.000Z"},
                        {"date": "2019-05-10T23:00:00.000Z"},
                        {"date": "2019-05-11T23:00:00.000Z"}
                    ]),
                });
            }, 1000);
        });
    }
    if (url === '/getDailyEvents/?date=2019-05-12&careRecipientId=df50cac5-293c-490d-a06c-ee26796f850d') {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    body: JSON.stringify([
                        {
                            caregiver_id: '5c9090ab-7d5e-4a72-8bf7-197190ad4c98',
                            caregiver_name: 'Skyla Cresswell',
                            event_type: 'check_in',
                            payload: {
                                volume_ml: 0,
                                pad_condition: '',
                                meal: '',
                                observed: false,
                                consumed_volume_ml: 0,
                                fluid: '',
                                note: '',
                                mood: '',
                                task_definition_description: ''
                            },
                            timestamp: new Date('2019-05-12T06:34:30.825Z'),
                            visit_id: '5cd753f0-8b66-f8a8-4591-3f78ca3f9c45'
                        }, {
                            caregiver_id: '3cacba0a-6041-11e9-b63f-06a80bfbb33e',
                            caregiver_name: 'Rahim Kavanagh',
                            event_type: 'fluid_intake_observation',
                            payload: {
                                volume_ml: 250,
                                pad_condition: '',
                                meal: '',
                                observed: false,
                                consumed_volume_ml: 0,
                                fluid: 'regular',
                                note: '',
                                mood: '',
                                task_definition_description: ''
                            },
                            timestamp: new Date('2019-05-12T07:21:11.990Z'),
                            visit_id: '5cd753f0-8b66-f8a8-4591-3f78ca3f9c45'
                        }
                    ]),
                });
            }, 1000);
        });
    }
});

