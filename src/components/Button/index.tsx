import { Component, JSX, Show, createMemo, splitProps } from "solid-js"
import "./Button.sass"
import { Hoverable } from "../Cursor"

export type ButtonVariant = "normal" | "primary" | "contained" | "text"
export const ButtonBare: Component<
	{
		variant?: ButtonVariant
	} & JSX.ButtonHTMLAttributes<"button">
> = (props) => {
	return (
		<button
			class="z-button"
			classList={{
				[props.variant || "normal"]: true,
			}}
			{...(props as any)}
		></button>
	)
}

export const Button: Component<
	{
		variant?: ButtonVariant
	} & JSX.ButtonHTMLAttributes<"button">
> = (props) => {
	return (
		<>
			<Hoverable shadow={false}>{<ButtonBare {...props} />}</Hoverable>
		</>
	)
}
