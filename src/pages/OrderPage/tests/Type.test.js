const { render } = require("@testing-library/react");
import Type from "../Type";
import { rest } from "msw";
import { server } from "../../../mocks/server";


test("displays product images from server", async()=>{
    render(<Type orderType="products" />)

    //이미지 찾기
    const productImages = await screen.findAllByRole("img", {
        name: /product$/i,
      });

    expect(productImages).toHavelLength(2);

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(["Ameria product","England product"]);
})

test("when fetch product data, face an error", async() => {
    server.resetHandlers(
        rest.get(`http://localhost:4000/products`, (req,res,ctx) => {
           return res(ctx.status(500))
        })
    )

    render(<Type orderType="products" />)
    const errorBanner = await screen.findByTestId("error-banner")
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
})

test("fetch option information from server", async()=>{
    render(<Type orderType="options" />)

    //체크박스 가져오기
    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
} )