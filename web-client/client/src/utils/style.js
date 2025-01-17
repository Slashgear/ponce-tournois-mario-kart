export const CSSTheme = {
    light: {
        mainColor: '#ff56a9',
        mainColorLight: '#fda3cf',
        mainBackgroundColor: '#ffffff',
        secondaryBackgroundColor: '#f3f3f4',
        mainTextColor: '#1d1d1d',
        tertiaryTextColor: '#989aa0',
        borderColor: '#e6e6e6',
        successColor: '#68b684',
        errorColor: '#f3453f',
        worstChartColor: '#ea4335',
    },
    dark: {
        mainColor: '#ff56a9',
        mainColorLight: '#fda3cf',
        mainBackgroundColor: '#36393f',
        secondaryBackgroundColor: '#2f3136',
        mainTextColor: '#ffffff',
        tertiaryTextColor: '#989aa0',
        borderColor: '#202225',
        successColor: '#68b684',
        errorColor: '#f3453f',
        worstChartColor: '#ea4335',
    },
};

export const getSelectStyle = (defaultStyle, theme) => ({
    ...defaultStyle,
    borderRadius: 6,
    colors: {
        ...defaultStyle.colors,
        primary: CSSTheme[theme].mainColor,
        primary25: CSSTheme[theme].secondaryBackgroundColor,
        primary50: CSSTheme[theme].mainColorLight,
        neutral0: CSSTheme[theme].mainBackgroundColor,
        neutral20: CSSTheme[theme].borderColor,
        neutral30: CSSTheme[theme].borderColor,
        neutral40: CSSTheme[theme].borderColor,
        neutral60: CSSTheme[theme].borderColor,
        neutral80: CSSTheme[theme].mainTextColor,
        neutral90: CSSTheme[theme].mainTextColor,
    },
});

export const COMPARISONS_COLORS = [
    '#33658a',
    '#F6AE2D',
    '#F26419',
    '#7A8450',
    '#95969D',
    '#4C2E05',
    '#AF9BB6',
    '#440D0F',
    '#93E1D8',
    '#04724D',
    '#4CB963',
    '#C73E1D',
    '#C59849',
    '#9B5DE5',
    '#CBE896',
    '#00BBF9',
    '#9A8873',
    '#610345',
    '#E3B505',
    '#044B7F',
];
