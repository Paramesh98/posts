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
import Dashboard from "../../pages/dashboard";
import {
  useGetAllPostsQuery,
  useGetSinglePostQuery,
} from "../../redux/postsApi";
import { store } from "../../redux/store";

const postItem = {
  title: "title",
  body: "body",
  id: 1,
};

jest.mock("../../redux/postsApi", () => {
  const originalModule = jest.requireActual("../../redux/postsApi");
  return {
    __esModule: true,
    ...originalModule,
    useGetSinglePostQuery: jest.fn(
      () =>
        ({
          isLoading: false,
          data: { title: "title", body: "body", id: 2 },
        } as any)
    ),
  };
});

const useGetSinglePostQueryMocked = jest.mocked(useGetSinglePostQuery);
describe("component/postItem", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </BrowserRouter>
  );

  beforeEach(() => {
    useGetSinglePostQueryMocked.mockClear();
  });

  it("should submit form", () => {
    useGetSinglePostQueryMocked.mockReturnValue({
      data: { title: "title", body: "body", id: 2 },
    } as any);
    // expect(getByText("title")).toBeInTheDocument();
    // expect(getByText("body")).toBeInTheDocument();
  });
});
