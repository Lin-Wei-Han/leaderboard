export interface HistoryRecord {
    tournament: string;
    placement: 'gold' | 'silver' | 'bronze' | 'participant';
    members: string[];
    videoUrl?: string; // Optional YouTube ID or URL
}

export interface TeamData {
    id: number;
    name: string;
    subtitle: string;
    participationCount: number;
    history: HistoryRecord[]; // Array of past participation details
}

export const mockTeams: TeamData[] = [
    {
        id: 1,
        name: "紫雲帝國",
        subtitle: "穩定四強",
        participationCount: 3,
        history: [
            {
                tournament: "第16屆宮燈盃辯論公開賽",
                placement: "gold",
                members: ["王小明", "李小華", "張阿志", "林雅婷", "吳家豪", "趙佩雯"],
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                tournament: "第14屆宮燈盃辯論公開賽",
                placement: "gold",
                members: ["王小明", "李小華", "陳大文", "林雅婷"]
            },
            {
                tournament: "第13屆宮燈盃辯論公開賽",
                placement: "silver",
                members: ["王小明", "張阿志", "吳家豪", "趙佩雯"]
            }
        ]
    },
    {
        id: 2,
        name: "柯基霸婚",
        subtitle: "新銳黑馬",
        participationCount: 2,
        history: [
            {
                tournament: "第15屆宮燈盃辯論公開賽",
                placement: "gold",
                members: ["陳志豪", "林怡君", "張雅恩"],
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
    },
    {
        id: 3,
        name: "醉遊一方",
        subtitle: "穩定四強",
        participationCount: 3,
        history: [
            {
                tournament: "第十八屆",
                placement: "gold",
                members: ["王小明", "李小華", "張阿志", "林雅婷", "吳家豪", "趙佩雯"],
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            },
            {
                tournament: "第十七屆",
                placement: "silver",
                members: ["李小華", "王小明", "張阿志", "林雅婷", "吳家豪", "趙佩雯", "黃怡君"],
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
        ]
    },
    {
        id: 4,
        name: "再打更多場",
        subtitle: "穩定四強",
        participationCount: 2,
        history: [
            {
                tournament: "第12屆宮燈盃辯論公開賽",
                placement: "gold",
                members: ["成員A", "成員B"]
            },
            {
                tournament: "第15屆宮燈盃辯論公開賽",
                placement: "silver",
                members: ["成員A", "成員B"]
            }
        ]
    },
    {
        id: 5,
        name: "Green Island",
        subtitle: "新銳黑馬",
        participationCount: 1,
        history: [
            {
                tournament: "第14屆宮燈盃辯論公開賽",
                placement: "silver",
                members: ["成員C", "成員D"]
            }
        ]
    },
    {
        id: 6,
        name: "尼斯公會",
        subtitle: "新銳黑馬",
        participationCount: 2,
        history: [
            {
                tournament: "第11屆宮燈盃辯論公開賽",
                placement: "gold",
                members: ["成員E", "成員F"]
            },
            {
                tournament: "第13屆宮燈盃辯論公開賽",
                placement: "bronze",
                members: ["成員E", "成員F"]
            }
        ]
    },
    {
        id: 7,
        name: "瑪卡巴卡",
        subtitle: "新銳黑馬",
        participationCount: 1,
        history: [
            {
                tournament: "第15屆宮燈盃辯論公開賽",
                placement: "bronze",
                members: ["成員G", "成員H"]
            }
        ]
    }
];
