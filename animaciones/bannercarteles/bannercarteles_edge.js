/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im = 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'personajes',
                            type: 'image',
                            rect: ['119px', '50px', '37.1%', '87.7%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)", im + "personajes.png", '50%', '50%', '100%', 'auto', 'no-repeat']
                        },
                        {
                            id: 'libeula2_symbol_1',
                            symbolName: 'libeula2_symbol_1',
                            type: 'rect',
                            rect: ['576px', '82px', '304px', '197px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.55273', '0.55273']]
                        },
                        {
                            id: 'libeula_symbol_1',
                            symbolName: 'libeula_symbol_1',
                            type: 'rect',
                            rect: ['625px', '123px', '307px', '194px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.56128', '0.56128']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '406px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(95,108,37,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 112,
                    autoPlay: false,
                    data: [
                        [
                            "eid1000",
                            "left",
                            0,
                            0,
                            "linear",
                            "${libeula_symbol_1}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid1001",
                            "top",
                            0,
                            0,
                            "linear",
                            "${libeula_symbol_1}",
                            '123px',
                            '123px'
                        ],
                        [
                            "eid990",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${libeula2_symbol_1}",
                            '0.55273',
                            '0.55273'
                        ],
                        [
                            "eid989",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${libeula2_symbol_1}",
                            '0.55273',
                            '0.55273'
                        ],
                        [
                            "eid986",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${libeula_symbol_1}",
                            '0.56128',
                            '0.56128'
                        ],
                        [
                            "eid985",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${libeula_symbol_1}",
                            '0.56128',
                            '0.56128'
                        ],
                        [
                            "eid1002",
                            "left",
                            0,
                            0,
                            "linear",
                            "${libeula2_symbol_1}",
                            '576px',
                            '576px'
                        ],
                        [
                            "eid1003",
                            "top",
                            0,
                            0,
                            "linear",
                            "${libeula2_symbol_1}",
                            '82px',
                            '82px'
                        ]
                    ]
                }
            },
            "libeula_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'libeula',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '1024px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/libeula.png', '0px', '0px', '1024px', '1024px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '307px', '194px']
                        }
                    }
                },
                timeline: {
                    duration: 112,
                    autoPlay: true,
                    data: [
                        [
                            "eid882",
                            "left",
                            0,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '27px'
                        ],
                        [
                            "eid887",
                            "left",
                            12,
                            0,
                            "linear",
                            "${libeula}",
                            '27px',
                            '37px'
                        ],
                        [
                            "eid892",
                            "left",
                            25,
                            0,
                            "linear",
                            "${libeula}",
                            '37px',
                            '32px'
                        ],
                        [
                            "eid897",
                            "left",
                            37,
                            0,
                            "linear",
                            "${libeula}",
                            '32px',
                            '10px'
                        ],
                        [
                            "eid902",
                            "left",
                            50,
                            0,
                            "linear",
                            "${libeula}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid907",
                            "left",
                            62,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid912",
                            "left",
                            75,
                            0,
                            "linear",
                            "${libeula}",
                            '10px',
                            '33px'
                        ],
                        [
                            "eid917",
                            "left",
                            87,
                            0,
                            "linear",
                            "${libeula}",
                            '33px',
                            '71px'
                        ],
                        [
                            "eid922",
                            "left",
                            100,
                            0,
                            "linear",
                            "${libeula}",
                            '71px',
                            '57px'
                        ],
                        [
                            "eid927",
                            "left",
                            112,
                            0,
                            "linear",
                            "${libeula}",
                            '57px',
                            '37px'
                        ],
                        [
                            "eid886",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${libeula}",
                            [0, 0],
                            [-0, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid891",
                            "background-position",
                            12,
                            0,
                            "linear",
                            "${libeula}",
                            [-0, -0],
                            [-271, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid896",
                            "background-position",
                            25,
                            0,
                            "linear",
                            "${libeula}",
                            [-271, -0],
                            [-540, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid901",
                            "background-position",
                            37,
                            0,
                            "linear",
                            "${libeula}",
                            [-540, -0],
                            [-0, -163],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid906",
                            "background-position",
                            50,
                            0,
                            "linear",
                            "${libeula}",
                            [-0, -163],
                            [-288, -163],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid911",
                            "background-position",
                            62,
                            0,
                            "linear",
                            "${libeula}",
                            [-288, -163],
                            [-586, -163],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid916",
                            "background-position",
                            75,
                            0,
                            "linear",
                            "${libeula}",
                            [-586, -163],
                            [-0, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid921",
                            "background-position",
                            87,
                            0,
                            "linear",
                            "${libeula}",
                            [-0, -353],
                            [-274, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid926",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${libeula}",
                            [-274, -353],
                            [-509, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid931",
                            "background-position",
                            112,
                            0,
                            "linear",
                            "${libeula}",
                            [-509, -353],
                            [-750, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid885",
                            "width",
                            0,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '271px'
                        ],
                        [
                            "eid890",
                            "width",
                            12,
                            0,
                            "linear",
                            "${libeula}",
                            '271px',
                            '269px'
                        ],
                        [
                            "eid895",
                            "width",
                            25,
                            0,
                            "linear",
                            "${libeula}",
                            '269px',
                            '275px'
                        ],
                        [
                            "eid900",
                            "width",
                            37,
                            0,
                            "linear",
                            "${libeula}",
                            '275px',
                            '288px'
                        ],
                        [
                            "eid905",
                            "width",
                            50,
                            0,
                            "linear",
                            "${libeula}",
                            '288px',
                            '298px'
                        ],
                        [
                            "eid910",
                            "width",
                            62,
                            0,
                            "linear",
                            "${libeula}",
                            '298px',
                            '288px'
                        ],
                        [
                            "eid915",
                            "width",
                            75,
                            0,
                            "linear",
                            "${libeula}",
                            '288px',
                            '274px'
                        ],
                        [
                            "eid920",
                            "width",
                            87,
                            0,
                            "linear",
                            "${libeula}",
                            '274px',
                            '235px'
                        ],
                        [
                            "eid925",
                            "width",
                            100,
                            0,
                            "linear",
                            "${libeula}",
                            '235px',
                            '241px'
                        ],
                        [
                            "eid930",
                            "width",
                            112,
                            0,
                            "linear",
                            "${libeula}",
                            '241px',
                            '261px'
                        ],
                        [
                            "eid883",
                            "top",
                            0,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '27px'
                        ],
                        [
                            "eid888",
                            "top",
                            12,
                            0,
                            "linear",
                            "${libeula}",
                            '27px',
                            '43px'
                        ],
                        [
                            "eid893",
                            "top",
                            25,
                            0,
                            "linear",
                            "${libeula}",
                            '43px',
                            '53px'
                        ],
                        [
                            "eid898",
                            "top",
                            37,
                            0,
                            "linear",
                            "${libeula}",
                            '53px',
                            '24px'
                        ],
                        [
                            "eid903",
                            "top",
                            50,
                            0,
                            "linear",
                            "${libeula}",
                            '24px',
                            '6px'
                        ],
                        [
                            "eid908",
                            "top",
                            62,
                            0,
                            "linear",
                            "${libeula}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid913",
                            "top",
                            75,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '7px'
                        ],
                        [
                            "eid918",
                            "top",
                            87,
                            0,
                            "linear",
                            "${libeula}",
                            '7px',
                            '23px'
                        ],
                        [
                            "eid923",
                            "top",
                            100,
                            0,
                            "linear",
                            "${libeula}",
                            '23px',
                            '27px'
                        ],
                        [
                            "eid928",
                            "top",
                            112,
                            0,
                            "linear",
                            "${libeula}",
                            '27px',
                            '21px'
                        ],
                        [
                            "eid884",
                            "height",
                            0,
                            0,
                            "linear",
                            "${libeula}",
                            '0px',
                            '163px'
                        ],
                        [
                            "eid889",
                            "height",
                            12,
                            0,
                            "linear",
                            "${libeula}",
                            '163px',
                            '147px'
                        ],
                        [
                            "eid894",
                            "height",
                            25,
                            0,
                            "linear",
                            "${libeula}",
                            '147px',
                            '137px'
                        ],
                        [
                            "eid899",
                            "height",
                            37,
                            0,
                            "linear",
                            "${libeula}",
                            '137px',
                            '166px'
                        ],
                        [
                            "eid904",
                            "height",
                            50,
                            0,
                            "linear",
                            "${libeula}",
                            '166px',
                            '188px'
                        ],
                        [
                            "eid909",
                            "height",
                            62,
                            0,
                            "linear",
                            "${libeula}",
                            '188px',
                            '190px'
                        ],
                        [
                            "eid914",
                            "height",
                            75,
                            0,
                            "linear",
                            "${libeula}",
                            '190px',
                            '183px'
                        ],
                        [
                            "eid919",
                            "height",
                            87,
                            0,
                            "linear",
                            "${libeula}",
                            '183px',
                            '167px'
                        ],
                        [
                            "eid924",
                            "height",
                            100,
                            0,
                            "linear",
                            "${libeula}",
                            '167px',
                            '163px'
                        ],
                        [
                            "eid929",
                            "height",
                            112,
                            0,
                            "linear",
                            "${libeula}",
                            '163px',
                            '169px'
                        ]
                    ]
                }
            },
            "libeula2_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'libeula2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '1024px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/libeula2.png', '0px', '0px', '1024px', '1024px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '304px', '197px']
                        }
                    }
                },
                timeline: {
                    duration: 112,
                    autoPlay: true,
                    data: [
                        [
                            "eid935",
                            "width",
                            0,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '268px'
                        ],
                        [
                            "eid940",
                            "width",
                            12,
                            0,
                            "linear",
                            "${libeula2}",
                            '268px',
                            '263px'
                        ],
                        [
                            "eid945",
                            "width",
                            25,
                            0,
                            "linear",
                            "${libeula2}",
                            '263px',
                            '271px'
                        ],
                        [
                            "eid950",
                            "width",
                            37,
                            0,
                            "linear",
                            "${libeula2}",
                            '271px',
                            '288px'
                        ],
                        [
                            "eid955",
                            "width",
                            50,
                            0,
                            "linear",
                            "${libeula2}",
                            '288px',
                            '298px'
                        ],
                        [
                            "eid959",
                            "width",
                            62,
                            0,
                            "linear",
                            "${libeula2}",
                            '298px',
                            '288px'
                        ],
                        [
                            "eid964",
                            "width",
                            75,
                            0,
                            "linear",
                            "${libeula2}",
                            '288px',
                            '271px'
                        ],
                        [
                            "eid969",
                            "width",
                            87,
                            0,
                            "linear",
                            "${libeula2}",
                            '271px',
                            '232px'
                        ],
                        [
                            "eid974",
                            "width",
                            100,
                            0,
                            "linear",
                            "${libeula2}",
                            '232px',
                            '238px'
                        ],
                        [
                            "eid979",
                            "width",
                            112,
                            0,
                            "linear",
                            "${libeula2}",
                            '238px',
                            '259px'
                        ],
                        [
                            "eid936",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${libeula2}",
                            [0, 0],
                            [-0, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid941",
                            "background-position",
                            12,
                            0,
                            "linear",
                            "${libeula2}",
                            [-0, -0],
                            [-268, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid946",
                            "background-position",
                            25,
                            0,
                            "linear",
                            "${libeula2}",
                            [-268, -0],
                            [-531, -0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid951",
                            "background-position",
                            37,
                            0,
                            "linear",
                            "${libeula2}",
                            [-531, -0],
                            [-0, -162],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid956",
                            "background-position",
                            50,
                            0,
                            "linear",
                            "${libeula2}",
                            [-0, -162],
                            [-288, -162],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid960",
                            "background-position",
                            62,
                            0,
                            "linear",
                            "${libeula2}",
                            [-288, -162],
                            [-586, -162],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid965",
                            "background-position",
                            75,
                            0,
                            "linear",
                            "${libeula2}",
                            [-586, -162],
                            [-0, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid970",
                            "background-position",
                            87,
                            0,
                            "linear",
                            "${libeula2}",
                            [-0, -353],
                            [-271, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid975",
                            "background-position",
                            100,
                            0,
                            "linear",
                            "${libeula2}",
                            [-271, -353],
                            [-503, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid980",
                            "background-position",
                            112,
                            0,
                            "linear",
                            "${libeula2}",
                            [-503, -353],
                            [-741, -353],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid932",
                            "left",
                            0,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '30px'
                        ],
                        [
                            "eid937",
                            "left",
                            12,
                            0,
                            "linear",
                            "${libeula2}",
                            '30px',
                            '40px'
                        ],
                        [
                            "eid942",
                            "left",
                            25,
                            0,
                            "linear",
                            "${libeula2}",
                            '40px',
                            '32px'
                        ],
                        [
                            "eid947",
                            "left",
                            37,
                            0,
                            "linear",
                            "${libeula2}",
                            '32px',
                            '10px'
                        ],
                        [
                            "eid952",
                            "left",
                            50,
                            0,
                            "linear",
                            "${libeula2}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid957",
                            "left",
                            62,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '10px'
                        ],
                        [
                            "eid961",
                            "left",
                            75,
                            0,
                            "linear",
                            "${libeula2}",
                            '10px',
                            '33px'
                        ],
                        [
                            "eid966",
                            "left",
                            87,
                            0,
                            "linear",
                            "${libeula2}",
                            '33px',
                            '71px'
                        ],
                        [
                            "eid971",
                            "left",
                            100,
                            0,
                            "linear",
                            "${libeula2}",
                            '71px',
                            '60px'
                        ],
                        [
                            "eid976",
                            "left",
                            112,
                            0,
                            "linear",
                            "${libeula2}",
                            '60px',
                            '39px'
                        ],
                        [
                            "eid933",
                            "top",
                            0,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '29px'
                        ],
                        [
                            "eid938",
                            "top",
                            12,
                            0,
                            "linear",
                            "${libeula2}",
                            '29px',
                            '45px'
                        ],
                        [
                            "eid943",
                            "top",
                            25,
                            0,
                            "linear",
                            "${libeula2}",
                            '45px',
                            '52px'
                        ],
                        [
                            "eid948",
                            "top",
                            37,
                            0,
                            "linear",
                            "${libeula2}",
                            '52px',
                            '23px'
                        ],
                        [
                            "eid953",
                            "top",
                            50,
                            0,
                            "linear",
                            "${libeula2}",
                            '23px',
                            '6px'
                        ],
                        [
                            "eid958",
                            "top",
                            62,
                            0,
                            "linear",
                            "${libeula2}",
                            '6px',
                            '0px'
                        ],
                        [
                            "eid962",
                            "top",
                            75,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid967",
                            "top",
                            87,
                            0,
                            "linear",
                            "${libeula2}",
                            '6px',
                            '23px'
                        ],
                        [
                            "eid972",
                            "top",
                            100,
                            0,
                            "linear",
                            "${libeula2}",
                            '23px',
                            '29px'
                        ],
                        [
                            "eid977",
                            "top",
                            112,
                            0,
                            "linear",
                            "${libeula2}",
                            '29px',
                            '23px'
                        ],
                        [
                            "eid934",
                            "height",
                            0,
                            0,
                            "linear",
                            "${libeula2}",
                            '0px',
                            '162px'
                        ],
                        [
                            "eid939",
                            "height",
                            12,
                            0,
                            "linear",
                            "${libeula2}",
                            '162px',
                            '146px'
                        ],
                        [
                            "eid944",
                            "height",
                            25,
                            0,
                            "linear",
                            "${libeula2}",
                            '146px',
                            '139px'
                        ],
                        [
                            "eid949",
                            "height",
                            37,
                            0,
                            "linear",
                            "${libeula2}",
                            '139px',
                            '168px'
                        ],
                        [
                            "eid954",
                            "height",
                            50,
                            0,
                            "linear",
                            "${libeula2}",
                            '168px',
                            '191px'
                        ],
                        [
                            "eid963",
                            "height",
                            75,
                            0,
                            "linear",
                            "${libeula2}",
                            '191px',
                            '185px'
                        ],
                        [
                            "eid968",
                            "height",
                            87,
                            0,
                            "linear",
                            "${libeula2}",
                            '185px',
                            '168px'
                        ],
                        [
                            "eid973",
                            "height",
                            100,
                            0,
                            "linear",
                            "${libeula2}",
                            '168px',
                            '162px'
                        ],
                        [
                            "eid978",
                            "height",
                            112,
                            0,
                            "linear",
                            "${libeula2}",
                            '162px',
                            '168px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("bannercarteles_edgeActions.js");
})("EDGE-25246453");
