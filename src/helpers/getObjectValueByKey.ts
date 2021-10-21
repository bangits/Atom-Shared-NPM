export const getObjectValueByKey = <T>(object: T, key: string): keyof T => {
    let currentValue 

    key.split('.').map((k) => {
        try {
            currentValue = currentValue ? currentValue[k] : object[k]
        } catch {
            throw new Error('Invalid key, must be dots')
        }
    })

    return currentValue
  }
  