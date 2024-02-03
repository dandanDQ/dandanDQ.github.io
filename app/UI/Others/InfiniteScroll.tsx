import "./InfiniteScroll.scss"
interface InfiniteScrollItem {
  children: React.ReactNode
}
export default function InfiniteScroll({children}: InfiniteScrollItem) {
    return <div className="ui-infinite-scroll">{children}</div>
}