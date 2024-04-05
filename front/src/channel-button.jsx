import React from 'react';
import { useEffect } from 'react';

export function ChatButton(){
    useEffect(() => {
        ChannelIO('boot', {
            pluginKey: 'ad7ebb49-4168-42ed-a342-db1ff3fc0043'
        });

        return () => {
            ChannelIO('shutdown');
        };
    }, []);

    return (
        <div>
            {/* 채널톡 챗 버튼을 원하는 곳에 추가 */}
            <div className="channel-chat-button" />
        </div>
    );
}
