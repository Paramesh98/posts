import {
  render,
  fireEvent,
  getByText,
  getByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PostItem from "../../components/postItem";
import AddPost from "../../forms/addPost";
import { store } from "../../redux/store";

const postItem = {
  title: "title",
  body: "body",
  id: 1,
};

describe("component/postItem", () => {
  const { getByPlaceholderText, getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <AddPost />
      </Provider>
    </BrowserRouter>
  );

  const mockPostFn = () => {
    return { isLoading: false };
  };
  const submitPost = () => ({
    unwrap: async () => [],
  });

  jest.mock("../../redux/postsApi", () => {
    const originalModule = jest.requireActual("../../redux/postApi");
    return {
      __esModule: true,
      ...originalModule,
      usePostSingleDataMutation: jest.fn(
        () => [submitPost, mockPostFn()] as any
      ),
    };
  });
  it("should submit form", () => {
    const title = getByPlaceholderText(/Enter Title/gi);
    const body = getByPlaceholderText(/Enter Body/gi);
    const button = getByText(/Add Post/gi);
    fireEvent.change(title, { target: { value: "title" } });
    fireEvent.change(body, { target: { value: "body" } });
    fireEvent.click(button);
  });
});
