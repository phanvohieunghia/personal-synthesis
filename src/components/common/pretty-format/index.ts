import renderer from 'react-test-renderer'
import { plugins, format as prettyFormat } from 'pretty-format'

const { ReactTestComponent } = plugins

export const PrettyFormat = (icon: JSX.Element) => {
	const formatted = prettyFormat(renderer.create(icon), {
		plugins: [ReactTestComponent],
		printFunctionName: true,
	})
	return formatted
}
