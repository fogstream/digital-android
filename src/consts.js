import Good from "./res/ok.svg";
import Alert from "./res/attention.svg";
import Fetch from "./res/clock.svg";
import Bad from "./res/cancel.svg";
import React from "react";

export const blueButtonColor = "#5E88FC";

export const COMPANY_OK = "CLEAR";
export const COMPANY_BAD = "UNCLEAR";
export const COMPANY_FETCH = "RESEARCH";
export const COMPANY_ALERT = "DANGER";

const query = "2723094685";
const tender_code = "0826600006319000103";

export const mock = [
  {
    "id": 1,
    "supplier": {
      "id": 1,
      "name": "ФОГСТРИМ",
      "inn": "2725097681",
      "ogrn": "1102722005352",
      "status": "RESEARCH",
      "type": {
        "id": 1,
        "name": "ООО",
        "criteria": []
      }
    },
    "tender": {
      "id": 3,
      "code": "0303300057919000001",
      "name": "Система контроля ценовой политики объектов малого и среднего бизнесса",
      "winner": {
        "id": 2,
        "name": "Pro-IT",
        "inn": "7718981874",
        "ogrn": "1147746572830",
        "status": "RESEARCH",
        "type": 1
      },
      "buyer": {
        "id": 6,
        "name": "КОМИТЕТ ПО КОНКУРЕНТНОЙ ПОЛИТИКЕ МОСКОВСКОЙ обл",
        "inn": "5024139723",
        "ogrn": "1135024006831",
        "status": "RESEARCH",
        "type": 1
      }
    },
    "results": [
      {
        "id": 1,
        "label": "Проверка на афелированность. Общее юр. лицо закупщика и исполнителя",
        "is_clean": true,
        "score": 1,
        "search": 1,
        "criterion": 3
      },
      {
        "id": 2,
        "label": "Проверка на афелированность. Родственные связи закупщика и исполнителя",
        "is_clean": true,
        "score": 1,
        "search": 1,
        "criterion": 2
      },
      {
        "id": 3,
        "label": "Проверка компетенций контрагента в проф. сфере",
        "is_clean": true,
        "score": 1,
        "search": 1,
        "criterion": 10
      }
    ],
    "percent": 100,
    "status": "CLEAR"
  },
  {
    "id": 2,
    "supplier": {
      "id": 1,
      "name": "ФОГСТРИМ",
      "inn": "2725097681",
      "ogrn": "1102722005352",
      "status": "RESEARCH",
      "type": {
        "id": 1,
        "name": "ООО",
        "criteria": []
      }
    },
    "tender": {
      "id": 7,
      "code": "31908095607",
      "name": "Поставка материала для технологического присоединения абонентов",
      "winner": {
        "id": 2,
        "name": "Pro-IT",
        "inn": "7718981874",
        "ogrn": "1147746572830",
        "status": "RESEARCH",
        "type": 1
      },
      "buyer": {
        "id": 10,
        "name": "МУП ЩМР 'Межрайонный Щёлковский Водоканал'",
        "inn": "5050025306",
        "ogrn": "1025006526269",
        "status": "RESEARCH",
        "type": 2
      }
    },
    "results": [],
    "percent": 0,
    "status": "RESEARCH"
  },
  {
    "id": 35,
    "supplier": {
      "id": 3,
      "name": "Мехатроника",
      "inn": "2723094685",
      "ogrn": "1072723005850",
      "status": "RESEARCH",
      "type": {
        "id": 1,
        "name": "ООО",
        "criteria": []
      }
    },
    "tender": {
      "id": 6,
      "code": "31908095608",
      "name": "Поставка материала для технологического присоединения абонентов",
      "winner": {
        "id": 4,
        "name": "Айти-Актив",
        "inn": "2722115501",
        "ogrn": "1122722007649",
        "status": "RESEARCH",
        "type": 1
      },
      "buyer": {
        "id": 10,
        "name": "МУП ЩМР 'Межрайонный Щёлковский Водоканал'",
        "inn": "5050025306",
        "ogrn": "1025006526269",
        "status": "RESEARCH",
        "type": 2
      }
    },
    "results": [
      {
        "id": 4,
        "label": "Проверка на афелированность. Общее юр. лицо закупщика и исполнителя",
        "is_clean": true,
        "score": 0,
        "search": 35,
        "criterion": 3
      },
      {
        "id": 5,
        "label": "Проверка на аффелированность. Проверка истории закупок",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 4
      },
      {
        "id": 6,
        "label": "Проверка на афелированность. Родственные связи закупщика и исполнителя",
        "is_clean": false,
        "score": 0,
        "search": 35,
        "criterion": 2
      },
      {
        "id": 7,
        "label": "Проверка на схождение бухгалтерского баланса",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 12
      },
      {
        "id": 8,
        "label": "Проверка на банкротством контрагента",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 11
      },
      {
        "id": 9,
        "label": "Проверка компетенций контрагента в проф. сфере",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 10
      },
      {
        "id": 10,
        "label": "Проверка на множественное предпренимательсто",
        "is_clean": false,
        "score": 0,
        "search": 35,
        "criterion": 9
      },
      {
        "id": 11,
        "label": "Проверка на наличие судимостей контрагента",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 8
      },
      {
        "id": 12,
        "label": "Проверка на наличие задолжностей в налоговой",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 7
      },
      {
        "id": 13,
        "label": "Проверка на афелированность. Общий юр. адрес исполнителя и закупщика",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 5
      },
      {
        "id": 14,
        "label": "Проверка на афелированность. Дочерние предприятия закупщика/исполнителя",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 1
      },
      {
        "id": 15,
        "label": "Проверка на связь контрагента с аферами (судимости)",
        "is_clean": true,
        "score": 1,
        "search": 35,
        "criterion": 13
      }
    ],
    "percent": 75,
    "status": "DANGER"
  },
  {
    "id": 36,
    "supplier": {
      "id": 3,
      "name": "Мехатроника",
      "inn": "2723094685",
      "ogrn": "1072723005850",
      "status": "RESEARCH",
      "type": {
        "id": 1,
        "name": "ООО",
        "criteria": []
      }
    },
    "tender": {
      "id": 5,
      "code": "0826600006319000103",
      "name": "Поставка компьютеров и оргтехники",
      "winner": null,
      "buyer": {
        "id": 9,
        "name": "МКУ \"УПРАВЛЕНИЕ МУНИЦИПАЛЬНЫХ ЗАКУПОК ШЕБЕКИНСКОГО ГОРОДСКОГО ОКРУГА\"",
        "inn": "3120103853",
        "ogrn": "1193123006911",
        "status": "RESEARCH",
        "type": 2
      }
    },
    "results": [
      {
        "id": 16,
        "label": "Проверка на афелированность. Общее юр. лицо закупщика и исполнителя",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 3
      },
      {
        "id": 17,
        "label": "Проверка на аффелированность. Проверка истории закупок",
        "is_clean": false,
        "score": 0,
        "search": 36,
        "criterion": 4
      },
      {
        "id": 18,
        "label": "Проверка на афелированность. Родственные связи закупщика и исполнителя",
        "is_clean": false,
        "score": 0,
        "search": 36,
        "criterion": 2
      },
      {
        "id": 19,
        "label": "Проверка на схождение бухгалтерского баланса",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 12
      },
      {
        "id": 20,
        "label": "Проверка на банкротством контрагента",
        "is_clean": false,
        "score": 0,
        "search": 36,
        "criterion": 11
      },
      {
        "id": 21,
        "label": "Проверка компетенций контрагента в проф. сфере",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 10
      },
      {
        "id": 22,
        "label": "Проверка на множественное предпренимательсто",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 9
      },
      {
        "id": 23,
        "label": "Проверка на наличие судимостей контрагента",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 8
      },
      {
        "id": 24,
        "label": "Проверка на наличие задолжностей в налоговой",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 7
      },
      {
        "id": 25,
        "label": "Проверка на афелированность. Общий юр. адрес исполнителя и закупщика",
        "is_clean": false,
        "score": 0,
        "search": 36,
        "criterion": 5
      },
      {
        "id": 26,
        "label": "Проверка на афелированность. Дочерние предприятия закупщика/исполнителя",
        "is_clean": true,
        "score": 1,
        "search": 36,
        "criterion": 1
      },
      {
        "id": 27,
        "label": "Проверка на связь контрагента с аферами (судимости)",
        "is_clean": false,
        "score": 0,
        "search": 36,
        "criterion": 13
      }
    ],
    "percent": 58,
    "status": "UNCLEAR"
  }
];

export const borderColorFromStatus = (status) => {
  switch (status) {
    case COMPANY_ALERT:
      return '#D0C800';
    case COMPANY_BAD:
      return '#E65101';
    case COMPANY_FETCH:
      return '#5e88fc';
    case COMPANY_OK:
      return '#5BBE06'
  }
};

export const iconFromStatus = (status) => {
  switch (status) {
    case COMPANY_OK:
      return <Good/>;
    case COMPANY_ALERT:
      return <Alert/>;
    case COMPANY_FETCH:
      return <Fetch/>;
    case COMPANY_BAD:
      return <Bad/>
  }
};

