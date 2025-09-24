export interface TitleSeqOptions {
    fallback?: string;
    isCaseSensitive?: boolean;
}
export default class TitleSeq<T> {
    private arr: T[] | Set<T>
    private mapper: (item: T) => string
    private fallback: string
    private isCaseSensitive: boolean

    constructor(arr: T[] | Set<T>, mapper: (item: T) => string, options: TitleSeqOptions = {}) {
        const { fallback = 'Untitled', isCaseSensitive = true } = options
        this.arr = arr
        this.mapper = mapper
        this.fallback = fallback
        this.isCaseSensitive = isCaseSensitive
    }

    generate(title?: string): string {
        const titles = Array.isArray(this.arr) ? this.arr : [...this.arr]
        const base = title ?? this.fallback
        let count = 0
        let gen = base
        const sets = new Set(titles.map(this.mapper))
        while (sets.has(this.isCaseSensitive ? gen : gen.toLowerCase())) {
            count++
            const suffix = count == 0 ? '' : ` (${count})`
            gen = `${base}${suffix}`
        }
        return gen
    }
}


