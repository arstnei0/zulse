import { Button } from "../Button"
import { ButtonGroup } from "../ButtonGroup"
import { Showcase, ShowcaseBox } from "../Showcase"

export const ButtonGroupShowcase = () => {
	return (
		<ShowcaseBox>
			<Showcase>
				<ButtonGroup>
					<Button>Follow</Button>
					<Button variant="primary">Follow</Button>
				</ButtonGroup>
			</Showcase>
		</ShowcaseBox>
	)
}
