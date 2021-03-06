import projectX from 'project-x'
import { fireEvent, wait } from 'dom-testing-library'

global.MutationObserver = class {
    observe() {}
}

test('data manipulated on component object is reactive', async () => {
    document.body.innerHTML = `
        <div x-data="{ foo: 'bar' }">
            <span x-text="foo"></span>
        </div>
    `

    projectX.start()

    document.querySelector('div').__x.data.foo = 'baz'

    await wait(() => { expect(document.querySelector('span').innerText).toEqual('baz') })
})
