import { Component, JSX } from "solid-js"
import "./Showcase.sass"

export const ShowcaseBox: Component<{ children: JSX.Element }> = (props) => {
	return <div class="showcase-box">{props.children}</div>
}

export const Showcase: Component<{ children: JSX.Element }> = (props) => {
	return <div class="showcase">{props.children}</div>
}
