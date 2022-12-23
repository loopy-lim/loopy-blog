import PostBackgroundComponent from './PostBackground.component';

const PostComponent = () => {
  const data = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo sed voluptas rerum ab reiciendis saepe assumenda, voluptatum incidunt eum earum. Soluta assumenda quo, blanditiis quis nihil atque fugiat facere.
  Aliquid, dolore aliquam! Quaerat ea sequi vitae nesciunt velit aspernatur cumque corporis quibusdam eos perspiciatis voluptates tenetur sed, fugit ut neque impedit! Hic, et nulla. Vero, magnam. Nam, tenetur totam.
  Vel voluptatem, perferendis iure at optio laborum quasi corporis. Distinctio voluptate necessitatibus accusantium repellendus iure molestiae, quas nemo quod, fugiat consectetur eveniet iste natus aspernatur sed excepturi accusamus? Dolorum, rem!
  Distinctio porro, at quo cumque libero cupiditate. Blanditiis recusandae excepturi architecto obcaecati accusamus ratione, maiores labore quasi, ducimus temporibus officia! Possimus aspernatur a iure provident assumenda, quos saepe molestiae ipsum!`;

  return (
    <div>
      <PostBackgroundComponent />
      <div className="flex justify-center translate-y-[100vh] bg-white">
        <div className="p-[5%] max-w-[65rem]">{data}</div>
      </div>
    </div>
  );
};

export default PostComponent;
