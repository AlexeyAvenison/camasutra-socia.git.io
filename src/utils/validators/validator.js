export const required = value => {
   if (value) return undefined;
   return 'Feld is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
   return (
      value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined   )
}