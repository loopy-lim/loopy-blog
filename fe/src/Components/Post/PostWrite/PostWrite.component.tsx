import Prism from 'prismjs';
import { useEffect, useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'prismjs/themes/prism.css';

const PostWriteComponent = () => {
  const ref = useRef<Editor>(null);
  const serverName = 'http://localhost';

  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ];

  useEffect(() => {
    ref.current?.getInstance().removeHook('addImageBlobHook');
    ref.current?.getInstance().addHook('addImageBlobHook', async file => {
      const formData = new FormData();
      formData.append('image', file);

      fetch(`${serverName}:3003/upload`, {
        method: 'POST',
        body: formData,
      })
        .then(data => data.json())
        .then((data: any) => {
          ref.current
            ?.getInstance()
            .insertText(
              `<img src="${serverName}/images/${data.filename}" alt=""/>`,
            );
          ref.current?.getInstance().eventEmitter.emit('closePopup');
        });
    });
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-[130rem] px-[5%]">
        <Editor
          initialValue={''}
          initialEditType="markdown" // wysiwyg & markdown
          previewStyle={'vertical'} // tab, vertical
          hideModeSwitch={true}
          theme={''}
          usageStatistics={false}
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          plugins={[[colorSyntax, { highlighter: Prism }]]}
          height="calc(100vh - 10rem)"
          ref={ref}
        />
      </div>
      <button className="self-end mx-[5%] py-2 px-4 border border-black rounded-md my-4">
        완료
      </button>
    </div>
  );
};

export default PostWriteComponent;
