import { render, fireEvent, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PostItem from "../../components/postItem";
import { store } from "../../redux/store";

const postItem = {
  title: "title",
  body: "body",
  id: 1,
};

describe("component/postItem", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <PostItem
          title={postItem.title}
          body={postItem.body}
          id={postItem.id}
        />
      </Provider>
    </BrowserRouter>
  );
  it("should display test details", () => {
    expect(getByText(postItem.title)).toBeInTheDocument();
    expect(getByText(postItem.body)).toBeInTheDocument();
  });
});
