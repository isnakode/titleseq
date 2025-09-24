import { expect, test } from 'vitest'
import TitleSeq from '.'

type Project = { title: string, members: number }

test('without custom title', () => {
    let projects: Project[] = [
        {
            title: 'Untitled',
            members: 20
        }
    ]
    const t = new TitleSeq(projects, (p) => p.title)

    projects.push({ title: t.generate(), members: 15 })
    projects.push({ title: t.generate(), members: 10 })
    projects.push({ title: t.generate(), members: 18 })
    expect(new Set(projects).size).toBe(projects.length)
})

test('with custom title', () => {
    let projects: Project[] = [
        {
            title: 'Untitled',
            members: 20
        }
    ]
    const t = new TitleSeq(projects, (p) => p.title)

    projects.push({ title: t.generate('Custom title'), members: 15 })
    projects.push({ title: t.generate('Untitled (2)'), members: 10 })
    projects.push({ title: t.generate(), members: 18 })
    expect(new Set(projects).size).toBe(projects.length)
})