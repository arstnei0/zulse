import { Component, JSX } from "solid-js"
import "./Button.sass"
import { Hoverable } from "../Cursor"

export type ButtonVariant = "normal" | "primary" | "contained" | "text"
export const Button: Component<
	{
		variant?: ButtonVariant
	} & JSX.ButtonHTMLAttributes<"button">
> = (props) => {
	return (
		<>
			<Hoverable shadow={false}>
				<button
					class="z-button"
					classList={{
						[props.variant || "normal"]: true,
					}}
					{...(props as any)}
				></button>
			</Hoverable>
		</>
	)
}
