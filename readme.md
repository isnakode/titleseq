# What is it?

Have you ever seen title like these?
```
Untitled
Untitled (1)
Untitled (2)
```
Titleseq is simple title sequence (just like above) generator based on your existing data

# how to use?

```ts
import TitleSeq from "titleseq"

type Project = { title: string, members: number }

let projects: Project[] = [
    {
        title: 'Untitled',
        members: 20
    }
]
const t = new TitleSeq(projects, (p) => p.title)

projects.push({ title: t.generate(), members: 15 }) // Untitled (1)
projects.push({ title: t.generate(), members: 10 }) // Untitled (2)
projects.push({ title: t.generate(), members: 18 }) // Untitled (3)
```
