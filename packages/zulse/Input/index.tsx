import type { Component, JSX } from "solid-js"
import { createMemo, splitProps } from "solid-js"
import "./Input.scss"
import { Hoverable } from "../Cursor"

export const Input: Component<
	{
		label?: string
		id?: string
		value?: string
	} & JSX.HTMLAttributes<HTMLInputElement>
> = (props) => {
	const [local, other] = splitProps(props, ["id", "label"])
	const id = createMemo(() => local.id || "Input")

	return (
		<>
			<div class="z-input">
				<input placeholder=" " id={id()} {...other} />
				<label for={id()}>{local.label || "input"}</label>
			</div>
		</>
	)
}
