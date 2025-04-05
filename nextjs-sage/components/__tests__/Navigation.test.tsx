import { act, render, waitFor, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { Navigation } from "../Navigation";
import theme from '../../styles/theme.module.scss'
 
jest.mock('../HomeIcon.tsx', () => ({
    
    HomeIcon: (props: any) => 
    <div>{props.color}</div>
}))

const mockScreens = ["a", "Home"]

describe("Navigation", () => {
    it("sets solid color given Home is current", async () => {
        act(() => {
            render(<Navigation screens={mockScreens} current="Home" setCurrent={jest.fn()} />)
        })

        await waitFor(() => {});
        expect(screen.getByText(theme.purple)).toBeInTheDocument();
    })

    it("sets transparent color given Home is not current", async () => {
        act(() => {
            render(<Navigation screens={mockScreens} current="a" setCurrent={jest.fn()} />)
        })

        await waitFor(() => {});
        expect(screen.getByText(theme.purple75)).toBeInTheDocument();
    })
})