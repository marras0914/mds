// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { ThemeDefinitionProps } from "./global.types";

export const lightColors = {
  white: "#fff",
  sectionOneBG: "#fff",
  defaultFontColor: "#000",
  bulletColor: "#2781B0",
  borderColor: "#E2E2E2",
  boxBackground: "#FBFAFA",
  mainGrey: "#5B5C5C",
  disabledGrey: "#E6EBEB",
  hoverGrey: "#E6EAEB",
  pressedGrey: "#D5D7D8",
  actionDisabledGrey: "#E7EAEB",
  mainBlue: "#07193E",
  hoverBlue: "#0D2453",
  pressedBlue: "#05132F",
  mainRed: "#C51B3F",
  hoverRed: "#FCF2F4",
  lightRed: "#C83B51",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#D5D7D7",
  disabledInnerGrey: "#B4B4B4",
  logoLabel: "#000000",
  logoLabelInverse: "#fff",
  promoBlue: "#A6DFEF",
  footerDivider: "#F2F2F2",
  promoBG: "#000110",
  loaderColor: "#113053",
  headerBG: "#FFFFFF",
  headerBorder: "#E5E5E5",
  headerColor: "#000000",
  tooltipBG: "#737373",
  tooltipColor: "#FFFFFF",
  labelColor: "#07193E",
  mainGreen: "#4CCB92",
  checkBoxBorder: "#c3c3c3",
  iconButtonBG: "#F8F8F8",
  iconButtonActive: "#5B5C5C80",
  iconButtonHover: "#EFEFEF",
  iconButtonDisabled: "#E6EBEB",
  iconButtonColor: "#7C7C7C",
  backLinkColor: "#073052",
  backLinkArrow: "#081C42",
  backLinkHover: "#eaedee",
  commonLinkColor: "#969FA8",
  breadcrumbsBackground: "#FCFCFD",
  breadcrumbsBackBorder: "#EAEDEE",
  breadcrumbsText: "#969FA8",
  actionsListBorder: "#F1F1F1",
  disabledActionsColor: "#EBEBEB",
  optionTextColor: "#5E5E5E",
  modalCloseColor: "#757575",
  modalCloseHoverBG: "#EAEAEA",
  modalOverlayBG: "#00000050",
  bulletBGColor: "#F1F4F4",
  placeholder: "#858585",
  readBoxTextColor: "#696969",
  secondAction: "#005C7E",
  secondActionHover: "#1B779A",
  secondActionActive: "#07506A",
  mainOrange: "#FFBD62",
  menuBackground:
    "linear-gradient(90deg, rgba(2,49,80,1) 0%, rgba(0,39,77,1) 50%, rgba(11,34,69,1) 100%)",
  menuDropArrowColor: "#8399AB",
  menuDropArrowBackground: "#0A1C3C",
  menuSelectedOption:
    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(20,88,122,1) 100%)",
  menuCommonColor: "#CADAE8",
  menuColorDivider: "#0F446C",
  menuCollapseColor: "#E8E8E8",
  menuIconBG: "#06274E",
  menuIconBorder: "#052148",
  tabBorder: "#EAEAEA",
  codeEditorComment: "#6e7781",
  codeEditorEntityTag: "#116329",
  codeEditorEntity: "#8250df",
  codeEditorSublimelinterGutterMark: "#8c959f",
  codeEditorConstant: "#0550ae",
  codeEditorString: "#0a3069",
  codeEditorKeyword: "#cf222e",
  codeEditorMarkupBold: "#24292f",
  codeEditorRegexp: "#ffaa00",
  linkColor: "#2781B0",
  mutedText: "#87888d",
  disabledOnSwitchBG: "#a9d3c5",
};

export const darkColors = {
  dark: "#181F2A",
  sectionOneBG: "#283140",
  defaultFontColor: "#8E98A9",
  bulletColor: "#4B586A",
  borderColor: "#8E98A9",
  boxBackground: "#283140",
  mainGrey: "#A2ADC0",
  disabledGrey: "#494A4D",
  hoverGrey: "#4B586A",
  borderPressedGrey: "#707988",
  pressedGrey: "#333D4B",
  mainWhite: "#E6ECEC",
  disabledWhite: "#B5BCBD",
  hoverWhite: "#EFEDED",
  pressedWhite: "#C3CBCB",
  mainRed: "#FF3958",
  hoverRed: "#4B586A",
  divisorColor: "#E3E3E3",
  disabledBGGrey: "#616A7C",
  disabledInnerGrey: "#3A3F4A",
  logoLabel: "#A3B7D9",
  logoLabelInverse: "#fff",
  footerDivider: "#545D6A",
  footerColor: "#85B3EE",
  promoBG: "#000106",
  loaderColor: "#8E98A9",
  headerBG: "#212936",
  headerBorder: "#191E28",
  headerColor: "#E9F5F6",
  tooltipBG: "#8E98A9",
  tooltipColor: "#161C24",
  labelColor: "#A2ADC0",
  mainGreen: "#58FAB1",
  checkBoxBorder: "#8E98A9",
  iconButtonBG: "#A2ADC0",
  iconButtonActive: "#707988",
  iconButtonHover: "#4B586A",
  iconButtonDisabled: "#494A4D",
  iconButtonColor: "#283140",
  backLinkColor: "#8E98A9",
  backLinkArrow: "#A2ADC0",
  backLinkHover: "#3A3F4A",
  modalCloseColor: "#4B586A",
  modalCloseHoverBG: "#4B586A",
  modalOverlayBG: "#00010650",
  bulletBGColor: "#D5DEEF",
  disabledSwitchBG: "#494A4C",
  disabledOnSwitchBG: "#a2d7c3",
  disabledBulletBG: "#4B586B",
  placeholder: "#494A4D",
  readBoxTextColor: "#707988",
  secondAction: "#1B637E",
  secondActionHover: "#297E9D",
  secondActionActive: "#145B76",
  mainOrange: "#fCCE9D",
  menuBackground: "#242D3E",
  menuDropArrowColor: "#8E98A9",
  menuDropArrowBackground: "#1C2436",
  menuSelectedOption: "linear-gradient(90deg, rgba(0,0,0,0) 0%, #1B212C 100%)",
  menuCommonColor: "#8E98A9",
  menuColorDivider: "#323C4E",
  menuCollapseColor: "#E8E8E8",
  menuIconBG: "#161F30",
  menuIconBorder: "#151E2E",
  menuHoverSelectedBorderIcon: "#0E1119",
  menuHoverSelectedBG: "#909AAB",
  codeEditorComment: "#8b949e",
  codeEditorEntityTag: "#7ee787",
  codeEditorEntity: "#d2a8ff",
  codeEditorSublimelinterGutterMark: "#8E98A9",
  codeEditorConstant: "#79c0ff",
  codeEditorString: "#a5d6ff",
  codeEditorKeyword: "#ff7b72",
  codeEditorMarkupBold: "#c9d1d9",
  codeEditorRegexp: "#ffd582",
  linkColor: "#85B3EE",
  mutedText: "#767a80",
};

export const lightTheme: ThemeDefinitionProps = {
  bgColor: lightColors.white,
  fontColor: lightColors.defaultFontColor,
  borderColor: lightColors.borderColor,
  bulletColor: lightColors.bulletColor,
  logoColor: lightColors.mainRed,
  logoLabelColor: lightColors.logoLabel,
  logoLabelInverse: lightColors.logoLabelInverse,
  loaderColor: lightColors.loaderColor,
  linkColor: lightColors.linkColor,
  boxBackground: lightColors.boxBackground,
  mutedText: lightColors.mutedText,
  signalColors: {
    main: lightColors.mainBlue,
    danger: lightColors.mainRed,
    good: lightColors.mainGreen,
    info: lightColors.bulletColor,
    warning: lightColors.mainOrange,
    disabled: lightColors.disabledGrey,
  },
  buttons: {
    regular: {
      enabled: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.white,
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: lightColors.disabledInnerGrey,
        text: lightColors.disabledInnerGrey,
        background: lightColors.disabledBGGrey,
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.mainGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
    callAction: {
      enabled: {
        border: lightColors.mainBlue,
        text: lightColors.white,
        background: lightColors.mainBlue,
        iconColor: lightColors.white,
      },
      disabled: {
        border: lightColors.actionDisabledGrey,
        text: lightColors.mainGrey,
        background: lightColors.actionDisabledGrey,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.hoverBlue,
        text: lightColors.white,
        background: lightColors.hoverBlue,
        iconColor: lightColors.white,
      },
      pressed: {
        border: lightColors.pressedBlue,
        text: lightColors.white,
        background: lightColors.pressedBlue,
        iconColor: lightColors.white,
      },
    },
    secondary: {
      enabled: {
        border: lightColors.mainRed,
        text: lightColors.mainRed,
        background: lightColors.white,
        iconColor: lightColors.mainRed,
      },
      disabled: {
        border: lightColors.disabledInnerGrey,
        text: lightColors.disabledInnerGrey,
        background: lightColors.disabledBGGrey,
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.lightRed,
        text: lightColors.mainRed,
        background: lightColors.hoverRed,
        iconColor: lightColors.mainRed,
      },
      pressed: {
        border: lightColors.mainRed,
        text: lightColors.white,
        background: lightColors.mainRed,
        iconColor: lightColors.white,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: lightColors.mainGrey,
        background: "transparent",
        iconColor: lightColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: lightColors.disabledInnerGrey,
        background: "transparent",
        iconColor: lightColors.disabledInnerGrey,
      },
      hover: {
        border: lightColors.hoverGrey,
        text: lightColors.mainGrey,
        background: lightColors.hoverGrey,
        iconColor: lightColors.mainGrey,
      },
      pressed: {
        border: lightColors.pressedGrey,
        text: lightColors.mainGrey,
        background: lightColors.pressedGrey,
        iconColor: lightColors.mainGrey,
      },
    },
    subAction: {
      enabled: {
        border: lightColors.secondAction,
        text: lightColors.white,
        background: lightColors.secondAction,
        iconColor: lightColors.white,
      },
      disabled: {
        border: lightColors.actionDisabledGrey,
        text: lightColors.mainGrey,
        background: lightColors.actionDisabledGrey,
        iconColor: lightColors.mainGrey,
      },
      hover: {
        border: lightColors.secondActionHover,
        text: lightColors.white,
        background: lightColors.secondActionHover,
        iconColor: lightColors.white,
      },
      pressed: {
        border: lightColors.secondActionActive,
        text: lightColors.white,
        background: lightColors.secondActionActive,
        iconColor: lightColors.white,
      },
    },
  },
  login: {
    formBG: lightColors.sectionOneBG,
    bgFilter: "none",
    promoBG: lightColors.promoBG,
    promoHeader: lightColors.white,
    promoText: lightColors.promoBlue,
    footerElements: lightColors.bulletColor,
    footerDivider: lightColors.footerDivider,
  },
  pageHeader: {
    background: lightColors.headerBG,
    border: lightColors.headerBorder,
    color: lightColors.headerColor,
  },
  tooltip: {
    background: lightColors.tooltipBG,
    color: lightColors.tooltipColor,
  },
  commonInput: {
    labelColor: lightColors.labelColor,
  },
  checkbox: {
    checkBoxBorder: lightColors.checkBoxBorder,
    checkBoxColor: lightColors.mainGreen,
    disabledBorder: lightColors.disabledInnerGrey,
    disabledColor: lightColors.disabledBGGrey,
  },
  iconButton: {
    buttonBG: lightColors.iconButtonBG,
    activeBG: lightColors.iconButtonActive,
    hoverBG: lightColors.iconButtonHover,
    disabledBG: lightColors.iconButtonDisabled,
    color: lightColors.iconButtonColor,
  },
  dataTable: {
    border: lightColors.borderColor,
    disabledBorder: lightColors.disabledGrey,
    disabledBG: lightColors.disabledBGGrey,
    selected: lightColors.mainBlue,
    deletedDisabled: lightColors.mainRed,
    hoverColor: lightColors.hoverGrey,
  },
  backLink: {
    color: lightColors.backLinkColor,
    arrow: lightColors.backLinkArrow,
    hover: lightColors.backLinkHover,
  },
  inputBox: {
    border: lightColors.borderColor,
    hoverBorder: lightColors.promoBG,
    color: lightColors.mainBlue,
    backgroundColor: lightColors.white,
    error: lightColors.mainRed,
    placeholderColor: lightColors.placeholder,
    disabledBorder: lightColors.disabledInnerGrey,
    disabledBackground: lightColors.disabledGrey,
    disabledPlaceholder: lightColors.disabledGrey,
    disabledText: lightColors.disabledInnerGrey,
  },
  breadcrumbs: {
    border: lightColors.borderColor,
    linksColor: lightColors.commonLinkColor,
    textColor: lightColors.breadcrumbsText,
    backgroundColor: lightColors.breadcrumbsBackground,
    backButton: {
      border: lightColors.breadcrumbsBackBorder,
      backgroundColor: lightColors.white,
    },
  },
  actionsList: {
    containerBorderColor: lightColors.actionsListBorder,
    backgroundColor: lightColors.iconButtonBG,
    disabledOptionsTextColor: lightColors.disabledActionsColor,
    optionsBorder: lightColors.headerBorder,
    optionsHoverTextColor: lightColors.defaultFontColor,
    optionsTextColor: lightColors.optionTextColor,
    titleColor: lightColors.defaultFontColor,
  },
  screenTitle: {
    border: lightColors.borderColor,
    subtitleColor: lightColors.commonLinkColor,
    iconColor: lightColors.mainBlue,
  },
  modalBox: {
    closeColor: lightColors.modalCloseColor,
    closeHoverBG: lightColors.modalCloseHoverBG,
    closeHoverColor: lightColors.defaultFontColor,
    containerColor: lightColors.white,
    overlayColor: lightColors.modalOverlayBG,
    titleColor: lightColors.defaultFontColor,
    iconColor: {
      default: lightColors.mainBlue,
      accept: lightColors.mainGreen,
      delete: lightColors.mainRed,
    },
  },
  switchButton: {
    bulletBGColor: lightColors.bulletBGColor,
    bulletBorderColor: lightColors.white,
    disabledBulletBGColor: lightColors.hoverGrey,
    disabledBulletBorderColor: lightColors.bulletBGColor,
    offLabelColor: lightColors.disabledInnerGrey,
    onLabelColor: lightColors.mainBlue,
    onBackgroundColor: lightColors.mainGreen,
    switchBackground: lightColors.hoverGrey,
    disabledBackground: lightColors.hoverGrey,
    disabledOnBackground: lightColors.disabledOnSwitchBG,
  },
  dropdownSelector: {
    hoverText: lightColors.defaultFontColor,
    backgroundColor: lightColors.white,
    hoverBG: lightColors.hoverGrey,
    selectedBGColor: lightColors.pressedGrey,
    selectedTextColor: lightColors.defaultFontColor,
    optionTextColor: lightColors.defaultFontColor,
    disabledText: lightColors.disabledGrey,
  },
  readBox: {
    borderColor: lightColors.headerBorder,
    backgroundColor: lightColors.boxBackground,
    textColor: lightColors.readBoxTextColor,
  },
  menu: {
    vertical: {
      background: lightColors.menuBackground,
      textColor: lightColors.menuCommonColor,
      hoverSelectedIconBorder: lightColors.white,
      iconBorderColor: lightColors.menuIconBorder,
      iconBGColor: lightColors.menuIconBG,
      dropArrowColor: lightColors.menuDropArrowColor,
      dropArrowBackground: lightColors.menuDropArrowBackground,
      hoverSelectedBackground: lightColors.menuSelectedOption,
      hoverSelectedColor: lightColors.white,
      notificationColor: lightColors.mainRed,
      sectionDividerColor: lightColors.menuColorDivider,
      sectionLabelColor: lightColors.white,
      menuCollapseColor: lightColors.menuCollapseColor,
    },
    horizontal: {
      menuHeaderBackground: lightColors.menuBackground,
      textColor: lightColors.optionTextColor,
      hoverSelectedIconBorder: lightColors.defaultFontColor,
      iconBorderColor: lightColors.menuIconBorder,
      iconBGColor: lightColors.boxBackground,
      dropArrowColor: lightColors.menuDropArrowColor,
      dropArrowBackground: lightColors.boxBackground,
      hoverSelectedBackground: lightColors.mainBlue,
      hoverSelectedColor: lightColors.defaultFontColor,
      notificationColor: lightColors.lightRed,
      sectionDividerColor: lightColors.menuColorDivider,
      barBackground: lightColors.boxBackground,
      dropBackground: lightColors.boxBackground,
      dropHoverSelectedColor: lightColors.white,
      noOptionsBar: lightColors.bulletColor,
    },
  },
  tabs: {
    vertical: {
      buttons: {
        hoverLabelColor: lightColors.mainBlue,
        hoverBackground: "transparent",
        backgroundColor: lightColors.iconButtonBG,
        labelColor: lightColors.mainGrey,
        disabledBackgroundColor: lightColors.disabledBGGrey,
        disabledColor: lightColors.disabledInnerGrey,
        selectedBackground: lightColors.headerBorder,
        selectedLabelColor: lightColors.mainBlue,
      },
      backgroundColor: lightColors.iconButtonBG,
      borders: lightColors.tabBorder,
    },
    horizontal: {
      buttons: {
        hoverLabelColor: lightColors.mainBlue,
        hoverBackground: "transparent",
        backgroundColor: "transparent",
        labelColor: lightColors.mainGrey,
        disabledBackgroundColor: "transparent",
        disabledColor: lightColors.disabledInnerGrey,
        selectedBackground: "transparent",
        selectedLabelColor: lightColors.mainBlue,
      },
      backgroundColor: "transparent",
      selectedIndicatorColor: lightColors.mainBlue,
    },
  },
  codeEditor: {
    backgroundColor: lightColors.white,
    textColor: lightColors.defaultFontColor,
    helpToolsBarBG: lightColors.boxBackground,
    comment: lightColors.codeEditorComment,
    entityTag: lightColors.codeEditorEntityTag,
    entity: lightColors.codeEditorEntity,
    sublimelinterGutterMark: lightColors.codeEditorSublimelinterGutterMark,
    constant: lightColors.codeEditorConstant,
    string: lightColors.codeEditorString,
    keyword: lightColors.codeEditorKeyword,
    markupBold: lightColors.codeEditorMarkupBold,
    codeEditorRegexp: lightColors.codeEditorRegexp,
  },
  tag: {
    alert: {
      background: lightColors.mainRed,
      label: lightColors.white,
      deleteColor: lightColors.white,
    },
    default: {
      background: lightColors.mainBlue,
      label: lightColors.white,
      deleteColor: lightColors.white,
    },
    secondary: {
      background: lightColors.secondAction,
      label: lightColors.white,
      deleteColor: lightColors.white,
    },
    warn: {
      background: lightColors.mainOrange,
      label: lightColors.defaultFontColor,
      deleteColor: lightColors.defaultFontColor,
    },
    ok: {
      background: lightColors.mainGreen,
      label: lightColors.defaultFontColor,
      deleteColor: lightColors.defaultFontColor,
    },
  },
  snackbar: {
    error: {
      backgroundColor: lightColors.mainRed,
      labelColor: lightColors.white,
    },
    default: {
      backgroundColor: lightColors.mainBlue,
      labelColor: lightColors.white,
    },
    success: {
      backgroundColor: lightColors.mainGreen,
      labelColor: lightColors.white,
    },
    warning: {
      backgroundColor: lightColors.mainOrange,
      labelColor: lightColors.defaultFontColor,
    },
  },
};

export const darkTheme: ThemeDefinitionProps = {
  bgColor: darkColors.dark,
  fontColor: darkColors.defaultFontColor,
  borderColor: darkColors.borderColor,
  bulletColor: darkColors.bulletColor,
  logoColor: darkColors.mainRed,
  logoLabelColor: darkColors.logoLabel,
  logoLabelInverse: darkColors.logoLabelInverse,
  loaderColor: darkColors.loaderColor,
  linkColor: darkColors.linkColor,
  boxBackground: darkColors.boxBackground,
  mutedText: darkColors.mutedText,
  signalColors: {
    main: darkColors.mainGrey,
    danger: darkColors.mainRed,
    good: darkColors.mainGreen,
    info: darkColors.secondActionHover,
    warning: darkColors.mainOrange,
    disabled: darkColors.disabledGrey,
  },
  buttons: {
    regular: {
      enabled: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.dark,
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.borderPressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    callAction: {
      enabled: {
        border: darkColors.mainWhite,
        text: darkColors.dark,
        background: darkColors.mainWhite,
        iconColor: darkColors.dark,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.hoverWhite,
        text: darkColors.dark,
        background: darkColors.hoverWhite,
        iconColor: darkColors.dark,
      },
      pressed: {
        border: darkColors.pressedWhite,
        text: darkColors.dark,
        background: darkColors.pressedWhite,
        iconColor: darkColors.dark,
      },
    },
    secondary: {
      enabled: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.dark,
        iconColor: darkColors.mainRed,
      },
      disabled: {
        border: darkColors.disabledInnerGrey,
        text: darkColors.disabledInnerGrey,
        background: darkColors.disabledBGGrey,
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.mainRed,
        text: darkColors.mainRed,
        background: darkColors.hoverRed,
        iconColor: darkColors.mainRed,
      },
      pressed: {
        border: darkColors.mainRed,
        text: darkColors.dark,
        background: darkColors.mainRed,
        iconColor: darkColors.dark,
      },
    },
    text: {
      enabled: {
        border: "transparent",
        text: darkColors.mainGrey,
        background: "transparent",
        iconColor: darkColors.mainGrey,
      },
      disabled: {
        border: "transparent",
        text: darkColors.disabledInnerGrey,
        background: "transparent",
        iconColor: darkColors.disabledInnerGrey,
      },
      hover: {
        border: darkColors.hoverGrey,
        text: darkColors.mainGrey,
        background: darkColors.hoverGrey,
        iconColor: darkColors.mainGrey,
      },
      pressed: {
        border: darkColors.pressedGrey,
        text: darkColors.borderPressedGrey,
        background: darkColors.pressedGrey,
        iconColor: darkColors.borderPressedGrey,
      },
    },
    subAction: {
      enabled: {
        border: darkColors.secondAction,
        text: darkColors.mainWhite,
        background: darkColors.secondAction,
        iconColor: darkColors.mainWhite,
      },
      disabled: {
        border: darkColors.disabledWhite,
        text: darkColors.dark,
        background: darkColors.disabledWhite,
        iconColor: darkColors.dark,
      },
      hover: {
        border: darkColors.secondActionHover,
        text: darkColors.mainWhite,
        background: darkColors.secondActionHover,
        iconColor: darkColors.mainWhite,
      },
      pressed: {
        border: darkColors.secondActionActive,
        text: darkColors.mainWhite,
        background: darkColors.secondActionActive,
        iconColor: darkColors.mainWhite,
      },
    },
  },
  login: {
    formBG: darkColors.sectionOneBG,
    promoBG: darkColors.promoBG,
    bgFilter: "grayscale(50%)",
    promoHeader: darkColors.logoLabel,
    promoText: darkColors.logoLabel,
    footerElements: darkColors.footerColor,
    footerDivider: darkColors.footerDivider,
  },
  pageHeader: {
    background: darkColors.headerBG,
    border: darkColors.headerBorder,
    color: darkColors.headerColor,
  },
  tooltip: {
    background: darkColors.tooltipBG,
    color: darkColors.tooltipColor,
  },
  commonInput: {
    labelColor: darkColors.labelColor,
  },
  checkbox: {
    checkBoxBorder: darkColors.checkBoxBorder,
    checkBoxColor: darkColors.mainGreen,
    disabledBorder: darkColors.disabledInnerGrey,
    disabledColor: darkColors.disabledBGGrey,
  },
  iconButton: {
    buttonBG: darkColors.iconButtonBG,
    activeBG: darkColors.iconButtonActive,
    hoverBG: darkColors.iconButtonHover,
    disabledBG: darkColors.iconButtonDisabled,
    color: darkColors.iconButtonColor,
  },
  dataTable: {
    border: darkColors.borderColor,
    disabledBorder: darkColors.disabledGrey,
    disabledBG: darkColors.disabledBGGrey,
    selected: darkColors.mainWhite,
    deletedDisabled: darkColors.mainRed,
    hoverColor: darkColors.hoverGrey,
  },
  backLink: {
    color: darkColors.backLinkColor,
    arrow: darkColors.backLinkArrow,
    hover: darkColors.backLinkHover,
  },
  inputBox: {
    border: darkColors.borderColor,
    hoverBorder: darkColors.mainWhite,
    color: darkColors.mainGrey,
    backgroundColor: darkColors.dark,
    error: darkColors.mainRed,
    placeholderColor: darkColors.placeholder,
    disabledBorder: darkColors.disabledGrey,
    disabledBackground: darkColors.disabledInnerGrey,
    disabledPlaceholder: darkColors.disabledGrey,
    disabledText: darkColors.disabledBGGrey,
  },
  breadcrumbs: {
    border: darkColors.borderColor,
    linksColor: darkColors.mainGrey,
    textColor: darkColors.mainGrey,
    backgroundColor: darkColors.sectionOneBG,
    backButton: {
      border: darkColors.borderColor,
      backgroundColor: darkColors.sectionOneBG,
    },
  },
  actionsList: {
    containerBorderColor: darkColors.bulletColor,
    backgroundColor: darkColors.sectionOneBG,
    disabledOptionsTextColor: darkColors.disabledGrey,
    optionsBorder: darkColors.bulletColor,
    optionsHoverTextColor: darkColors.hoverWhite,
    optionsTextColor: darkColors.defaultFontColor,
    titleColor: darkColors.defaultFontColor,
  },
  screenTitle: {
    border: darkColors.borderColor,
    subtitleColor: darkColors.hoverGrey,
    iconColor: darkColors.mainGrey,
  },
  modalBox: {
    closeColor: darkColors.modalCloseColor,
    closeHoverBG: darkColors.modalCloseHoverBG,
    closeHoverColor: darkColors.defaultFontColor,
    containerColor: darkColors.boxBackground,
    overlayColor: darkColors.modalOverlayBG,
    titleColor: darkColors.defaultFontColor,
    iconColor: {
      default: darkColors.mainGrey,
      accept: darkColors.mainGreen,
      delete: darkColors.mainRed,
    },
  },
  switchButton: {
    bulletBGColor: darkColors.bulletBGColor,
    bulletBorderColor: darkColors.mainWhite,
    disabledBulletBGColor: darkColors.disabledBulletBG,
    disabledBulletBorderColor: darkColors.backLinkArrow,
    offLabelColor: darkColors.hoverGrey,
    onLabelColor: darkColors.hoverWhite,
    onBackgroundColor: darkColors.mainGreen,
    switchBackground: darkColors.backLinkArrow,
    disabledBackground: darkColors.disabledSwitchBG,
    disabledOnBackground: darkColors.disabledOnSwitchBG,
  },
  dropdownSelector: {
    hoverText: darkColors.dark,
    backgroundColor: darkColors.sectionOneBG,
    hoverBG: darkColors.mainGrey,
    selectedBGColor: darkColors.bulletColor,
    selectedTextColor: darkColors.mainWhite,
    optionTextColor: darkColors.defaultFontColor,
    disabledText: darkColors.disabledGrey,
  },
  readBox: {
    borderColor: darkColors.headerBorder,
    backgroundColor: darkColors.boxBackground,
    textColor: darkColors.readBoxTextColor,
  },
  menu: {
    vertical: {
      background: darkColors.menuBackground,
      textColor: darkColors.menuCommonColor,
      hoverSelectedIconBorder: darkColors.menuHoverSelectedBorderIcon,
      iconBorderColor: darkColors.menuIconBorder,
      iconBGColor: darkColors.menuIconBG,
      dropArrowColor: darkColors.menuDropArrowColor,
      dropArrowBackground: darkColors.menuDropArrowBackground,
      hoverSelectedBackground: darkColors.menuSelectedOption,
      hoverSelectedColor: darkColors.headerColor,
      notificationColor: darkColors.mainRed,
      sectionDividerColor: darkColors.menuColorDivider,
      sectionLabelColor: darkColors.headerColor,
      menuCollapseColor: darkColors.menuCollapseColor,
    },
    horizontal: {
      menuHeaderBackground: darkColors.menuBackground,
      textColor: darkColors.defaultFontColor,
      hoverSelectedIconBorder: darkColors.defaultFontColor,
      iconBorderColor: darkColors.menuIconBorder,
      iconBGColor: darkColors.boxBackground,
      dropArrowColor: darkColors.menuDropArrowColor,
      dropArrowBackground: darkColors.boxBackground,
      hoverSelectedBackground: darkColors.mainGrey,
      hoverSelectedColor: darkColors.headerColor,
      notificationColor: darkColors.mainRed,
      sectionDividerColor: darkColors.menuColorDivider,
      barBackground: darkColors.boxBackground,
      dropBackground: darkColors.boxBackground,
      dropHoverSelectedColor: darkColors.dark,
      noOptionsBar: darkColors.mainGrey,
    },
  },
  tabs: {
    vertical: {
      buttons: {
        hoverLabelColor: darkColors.mainWhite,
        hoverBackground: "transparent",
        backgroundColor: darkColors.boxBackground,
        labelColor: darkColors.defaultFontColor,
        disabledBackgroundColor: darkColors.disabledBGGrey,
        disabledColor: darkColors.disabledInnerGrey,
        selectedBackground: darkColors.iconButtonBG,
        selectedLabelColor: darkColors.dark,
      },
      backgroundColor: darkColors.boxBackground,
      borders: darkColors.borderColor,
    },
    horizontal: {
      buttons: {
        hoverLabelColor: darkColors.mainWhite,
        hoverBackground: "transparent",
        backgroundColor: "transparent",
        labelColor: darkColors.defaultFontColor,
        disabledBackgroundColor: "transparent",
        disabledColor: darkColors.disabledInnerGrey,
        selectedBackground: "transparent",
        selectedLabelColor: darkColors.mainWhite,
      },
      backgroundColor: "transparent",
      selectedIndicatorColor: darkColors.mainWhite,
    },
  },
  codeEditor: {
    backgroundColor: darkColors.boxBackground,
    textColor: darkColors.mainWhite,
    helpToolsBarBG: darkColors.boxBackground,
    comment: darkColors.codeEditorComment,
    entityTag: darkColors.codeEditorEntityTag,
    entity: darkColors.codeEditorEntity,
    sublimelinterGutterMark: darkColors.codeEditorSublimelinterGutterMark,
    constant: darkColors.codeEditorConstant,
    string: darkColors.codeEditorString,
    keyword: darkColors.codeEditorKeyword,
    markupBold: darkColors.codeEditorMarkupBold,
    codeEditorRegexp: darkColors.codeEditorRegexp,
  },
  tag: {
    alert: {
      background: darkColors.mainRed,
      label: darkColors.mainWhite,
      deleteColor: darkColors.mainWhite,
    },
    default: {
      background: darkColors.mainGrey,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
    secondary: {
      background: darkColors.secondAction,
      label: darkColors.mainWhite,
      deleteColor: darkColors.mainWhite,
    },
    warn: {
      background: darkColors.mainOrange,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
    ok: {
      background: darkColors.mainGreen,
      label: darkColors.dark,
      deleteColor: darkColors.dark,
    },
  },
  snackbar: {
    error: {
      backgroundColor: darkColors.mainRed,
      labelColor: darkColors.mainWhite,
    },
    default: {
      backgroundColor: darkColors.mainGrey,
      labelColor: darkColors.dark,
    },
    success: {
      backgroundColor: darkColors.mainGreen,
      labelColor: darkColors.dark,
    },
    warning: {
      backgroundColor: darkColors.mainOrange,
      labelColor: darkColors.dark,
    },
  },
};
