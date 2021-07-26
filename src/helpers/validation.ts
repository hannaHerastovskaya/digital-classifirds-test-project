export const getNumberValue = (
    str: string, maxLength: number
): string => {
    const { length } = str;
    const indexOfLastChar = length - 1;
    return !isNaN(+str[indexOfLastChar]) && length < (maxLength + 1) ? str : str.substring(0, indexOfLastChar);
}

export const formatCardNumber = (
    str: string, separator: string
): string => str?.match(/.{1,4}/g)?.join(separator) ?? '';

export const validMonthNumber = (value: string) => {
    const currentValue = getNumberValue(value, 2);
    const { length } = currentValue;
    if (length === 1) return +currentValue > 1 ? `0${currentValue}` : currentValue;
    return +currentValue > 12 ? '1' : currentValue;
}