import { act, render, waitFor, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import { RatioBar } from "../RatioBar"
 
const mockRatio = {
    item1: {
        name: "Sodium",
        color: "#ffffff"
    },
    item2: {
        name: "Potassium",
        color: "#000000"
    },
    min: 0.6,
    max: 0.8
}

describe("RatioBar", () => {
    it("returns correct width given ratio within range", async () => {
        act(() => {
            render(<RatioBar ratio={mockRatio} current={0.7} />)
        })

        await waitFor(() => {});
        expect(screen.getByTestId("bar")).toHaveStyle('width: 50%');
    })
    it("returns correct width given ratio below range", async () => {
        act(() => {
            render(<RatioBar ratio={mockRatio} current={0.45} />)
        })

        await waitFor(() => {});
        expect(screen.getByTestId("bar")).toHaveStyle('width: 25%');
    })
    it("returns correct width given ratio above range", async () => {
        act(() => {
            render(<RatioBar ratio={mockRatio} current={1.2} />)
        })

        await waitFor(() => {});
        expect(screen.getByTestId("bar")).toHaveStyle('width: 75%');
    })
})