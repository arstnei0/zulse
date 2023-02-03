import { Component, createEffect, createMemo, createSignal } from "solid-js"
import "./Textarea.sass"

export const Textarea: Component<{
	update?: (content: string) => any
	placeholder?: string
	default?: string
}> = (props) => {
	let el: HTMLTextAreaElement = null as any
	const [content, setContent] = createSignal(props.default ?? "")
	createEffect(() => {
		props.update?.(content())
	})

	return (
		<>
			<textarea
				class="z-textarea"
				ref={el}
				value={content()}
				placeholder={props.placeholder}
				onInput={(e) => {
					setContent((e.target as any).value)
					el.style.height = "auto"
					el.style.height = `${el.scrollHeight + 10}px`
				}}
			></textarea>
		</>
	)
}
