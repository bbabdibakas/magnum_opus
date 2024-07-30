export function classNames(cls: string, additional: string[] = [], mods: { [key: string]: boolean } = {}): string {
    const classNamesArray = [cls, ...additional]

    for (const key in mods) {
        if (mods[key]) {
            classNamesArray.push(key)
        }
    }

    return classNamesArray.join(' ')
}