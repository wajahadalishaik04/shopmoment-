
export const breakText = (str) => {
    const isBreakText = String(str).includes(',')
    if (isBreakText) {
      return String(str).split(',')
    }
    return [str]
  }
