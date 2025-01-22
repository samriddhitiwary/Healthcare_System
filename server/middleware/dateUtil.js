export function convertDate(dateStr) {
    return dateStr.split('T')[0] + 'T00:00:00.000Z'
  }