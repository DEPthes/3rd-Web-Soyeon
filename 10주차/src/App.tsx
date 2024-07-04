import { useState } from 'react';
import Menu from "./components/Menu";
import yetsul from './assets/project/yetsul.png';
import ieum from './assets/project/ieum.png';
import began from './assets/project/began.png';
import water from './assets/project/water.png';
import money from './assets/project/money.png';
import exhibition from './assets/project/exhibition.png';
import idea from './assets/project/idea.png';

import yetsulL from './assets/logo/yetsulL.png';
import ieumL from './assets/logo/ieumL.png';
import beganL from './assets/logo/beganL.png';
import waterL from './assets/logo/waterL.png';
import moneyL from './assets/logo/moneyLogo.png';
import exhibitionL from './assets/logo/exhibitionLogo.png';
import ideaL from './assets/logo/ideaLogo.png';

import Project from "./components/Project";
import './App.css';
import ProjectInformation from "./components/ProjectInformation";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("1기");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleMenu = (menuName: string) => {
    setSelectedMenu(menuName);
    setSelectedProject(null);
  };

  const handleProject = (projectName: string) => {
    setSelectedProject(projectName);
    setSelectedMenu(null);
  };

  const viewProject = () => {
    switch (selectedMenu) {
      case '1기':
        return (
          <button onClick={() => handleProject('옛술의 전당')}>
            <Project
              picture={yetsul}
              projectName="옛술의 전당"
              projectIntro="청춘을 위한 한 잔, 옛술의 전당에서 건배!"
              projectType="WEB"
            />
          </button>
        );
      case '2기 MVP':
        return (
          <>
            <button onClick={() => handleProject('이:음')}>
              <Project
                picture={ieum}
                projectName="이:음"
                projectIntro="편지의 따뜻한 위로를 전하는 랜덤 익명 편지 서비스"
                projectType="WEB"
              />
            </button>
            <button onClick={() => handleProject('비긴, 비건')}>
              <Project
                picture={began}
                projectName="비긴, 비건"
                projectIntro="비건=채식주의?NO! 비건은 그렇게 어렵지 않아"
                projectType="APP"
              />
            </button>
            <button onClick={() => handleProject('물은 답을 알고 있다')}>
              <Project
                picture={water}
                projectName="물은 답을 알고 있다"
                projectIntro="나쁜 감정을 좋은 감정으로, 사라지는 일기 앱 서비스"
                projectType="APP"
              />
            </button>
          </>
        );
      case '2기 Main':
        return (
          <>
            <button onClick={() => handleProject('금융원정대')}>
              <Project
                picture={money}
                projectName="금융원정대"
                projectIntro="당신의 위대한 여정이 시작된다!"
                projectType="WEB"
              />
            </button>
            <button onClick={() => handleProject('전시로그')}>
              <Project
                picture={exhibition}
                projectName="전시로그"
                projectIntro="전시를 기록하다:전시회 정보 플랫폼"
                projectType="APP"
              />
            </button>
            <button onClick={() => handleProject('아이디어 캠퍼스')}>
              <Project
                picture={idea}
                projectName="아이디어 캠퍼스"
                projectIntro="각 팀의 작품을 구경하고, 나만의 아이디어를 펼쳐보세요!"
                projectType="WEB"
              />
            </button>
          </>
        );
    }
  };

  const viewProjectInfo = () => {
    switch (selectedProject) {
      case '옛술의 전당':
        return (
          <ProjectInformation
            picture1={yetsulL}
            picture2={yetsul}
            title="옛술의 전당"
            intro="청춘을 위한 한 잔, 옛술의 전당에서 건배!"
            detailIntro="옛술의 전당은 ‘우리의 자랑스러운 전통주를 알리기 위해’ 시작되었습니다. 자신에게 어울리는 전통주를 찾고 전통주의 매력을 한층 더 느끼며, 전통주를 즐길 수 있게 하는 것을 목표로 제작하였고, 우리의 옛술이 더 이상 ‘전통주’ 자체가 아닌 모두가 함께 즐길 수 있는 술로 거듭나도록 다양한 서비스를 제공하고 있습니다."
            team_person={[
              { name: '이보현', team: "TEAM LEADER", id: 1 },
              { name: '이여원', team: "PM LEADER", id: 2 },
              { name: '강상원', team: "WEB LEADER", id: 3 },
              { name: '김혜찬', team: "SERVER LEADER", id: 3 },
              { name: '문규원', team: "PM", id: 3 },
              { name: '박상민', team: "PM", id: 3 },
              { name: '김보은', team: "PM", id: 3 },
              { name: '김희윤', team: "WEB", id: 3 },
              { name: '이보현', team: "WEB", id: 3 },
              { name: '이가은', team: "WEB", id: 3 },
              { name: '김현빈', team: "SERVER", id: 3 },
              { name: '최성경', team: "DESIGN", id: 3 },
            ]}
          />
        );
      case '이:음':
        return (
          <ProjectInformation
            picture1={ieumL}
            picture2={ieum}
            title="이:음"
            intro="자신의 감정을 글로 적는 과정에서 해소가 이루어지기도 하고, 익명의 누군가와 편지를 주고 받으며 예상치 못한 사람에게 예상치 못한 답변을 받기도 하죠. 이:음에서 정성이 담긴 편지의 온기를 다시 느껴보세요."
            detailIntro="자세한 소개 내용"
            team_person={[
              { name: '이여원', team: "PM LEADER", id: 1 },
              { name: '박지수', team: "CLIENT LEADER", id: 2 },
              { name: '백계환', team: "SERVER LEADER", id: 3 },
              { name: '김민주', team: "DESIGN LEADER", id: 3 },
              { name: '조민경', team: "PM", id: 3 },
              { name: '나범수', team: "CLIENT", id: 3 },
              { name: '이가은', team: "CLIENT", id: 3 },
              { name: '장현준', team: "CLIENT", id: 3 },
              { name: '정지수', team: "SERVER", id: 3 },
            ]}
          />
        );
      case '비긴, 비건':
        return (
          <ProjectInformation
            picture1={beganL}
            picture2={began}
            title="비긴, 비건"
            intro="비건=채식주의?NO! 비건은 그렇게 어렵지 않아"
            detailIntro="“비건=채식주의? NO! 비건은 그렇게 어렵지 않아” 커져가는 비건 시장 속에서 헤매는 “비기너”들과 함께 “비거너”가 되는 여정을 함께합니다."
            team_person={[
              { name: '문규원', team: "PM LEADER", id: 1 },
              { name: '최정현', team: "CLIENT LEADER", id: 2 },
              { name: '강승우', team: "SERVER LEADER", id: 3 },
              { name: '김세림', team: "DESIGN LEADER", id: 3 },
              { name: '김민서', team: "PM", id: 3 },
              { name: '서윤지', team: "CLIENT", id: 3 },
              { name: '박세진', team: "SERVER", id: 3 }
            ]}
          />
        );
      case '물은 답을 알고 있다':
        return (
          <ProjectInformation
            picture1={waterL}
            picture2={water}
            title="물은 답을 알고 있다"
            intro="사용자들은 부정적인 감정을 ‘물’에 털어내고 상황에 맞는 답변을 통해 위로 또는 공감을 받을 수 있습니다. 일기를 작성하여 결정이 완성되면 결정에 담긴 답변을 열람함으로써, 지난 날을 되돌아볼 수 있습니다."
            detailIntro="자세한 소개 내용"
            team_person={[
              { name: '이인서', team: "PM LEADER", id: 1 },
              { name: '김희윤', team: "CLIENT LEADER", id: 2 },
              { name: '김해찬', team: "SERVER LEADER", id: 3 },
              { name: '이다은', team: "DESIGN LEADER", id: 3 },
              { name: '전하늘', team: "PM", id: 3 },
              { name: '이보현', team: "CLIENT", id: 3 },
              { name: '노은빈', team: "SERVER", id: 3 }
            ]}
          />
        );
        case '금융원정대':
        return (
          <ProjectInformation
            picture1={moneyL}
            picture2={money}
            title="금융원정대"
            intro="당신의 위대한 여정이 시작된다!"
            detailIntro="복잡한 금융 용어와 상품들 탓에 어려움을 느낀 적이 있나요? 상품이 너무 많아 금융 상품을 비교하는 서비스가 번거로웠던 경험이 있나요? 금융이 어려운 청년들을 위한, 수많은 금융 정보들을 누구나 쉽고 빠르게 볼 수 있는 서비스를 만들었어요. 금융원정대와 함께라면, 여러분에게 맞는 금융 상품을 쉽게 찾을 수 있어요"
            team_person={[
              { name: '박수성', team: "PM LEADER", id: 1 },
              { name: '박지수', team: "CLIENT LEADER", id: 2 },
              { name: '노은빈', team: "SERVER LEADER", id: 3 },
              { name: '김민주', team: "DESIGN LEADER", id: 3 },
              { name: '백도현', team: "PM", id: 3 },
              { name: '이보현', team: "CLIENT", id: 3 },
              { name: '이가은', team: "CLIENT", id: 3 },
              { name: '장현준', team: "CLIENT", id: 3 },
              { name: '박세진', team: "SERVER", id: 3 },
              { name: '이재혁', team: "SERVER", id: 3 },
              { name: '김태진', team: "DESIGNER", id: 3 }
            ]}
          />
        );
        case '전시로그':
        return (
          <ProjectInformation
            picture1={exhibitionL}
            picture2={exhibition}
            title="전시로그"
            intro="전시를 기록하다:전시회 정보 플랫폼"
            detailIntro="사용자가 전시회의 정보를 보다 쉽게 찾도록 도와주는 서비스로, 서비스를 통해 각 전시회의 세부 정보를 확인할 수 있어요. 사용자들이 별점과 감상평을 통해 자신의 생각과 경험을 나눌 수 있게 함으로써 풍부하고 만족스러운 전시회 경험을 쌓을 수 있도록 지원해요!"
            team_person={[
              { name: '조민경', team: "PM LEADER", id: 1 },
              { name: '서윤지', team: "CLIENT LEADER", id: 2 },
              { name: '백계환', team: "SERVER LEADER", id: 3 },
              { name: '김세림', team: "DESIGN LEADER", id: 3 },
              { name: '이인서', team: "PM", id: 3 },
              { name: '문장훈', team: "CLIENT", id: 3 },
              { name: '임준형', team: "SERVER", id: 3 },
              { name: '강승우', team: "SERVER", id: 3 }
            ]}
          />
        );
        case '아이디어 캠퍼스':
        return (
          <ProjectInformation
            picture1={ideaL}
            picture2={idea}
            title="아이디어 캠퍼스"
            intro="각 팀의 작품을 구경하고, 나만의 아이디어를 펼쳐보세요!"
            detailIntro="대학생들은 뛰어난 아이디어와 개발 능력을 가지고 있지만 이를 널리 알리고 사용자를 모으는데 어려움을 겪는 경우가 많아요. 아이디어 캠퍼스는 그들의 노력을 더 가치있게 만들어주고, 사용자들에게 혁신적인 서비스와 아이디어를 소개함으로써 IT문화의 발전을 촉진시켜요."
            team_person={[
              { name: '허재석', team: "PM LEADER", id: 1 },
              { name: '나범수', team: "CLIENT LEADER", id: 2 },
              { name: '정지수', team: "SERVER LEADER", id: 3 },
              { name: '이다은', team: "DESIGN LEADER", id: 3 },
              { name: '전하늘', team: "PM", id: 3 },
              { name: '박상민', team: "CLIENT", id: 3 },
              { name: '정상경', team: "CLIENT", id: 3 },
              { name: '배수연', team: "SERVER", id: 3 },
              { name: '이상남', team: "SERVER", id: 3 },
              { name: '봉서연', team: "DESIGNER", id: 3 }
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="whole-display">
        <div className="menu-display">
          <button  onClick={() => handleMenu('1기')}>
            <Menu menuName="1기" />
          </button>
          <button  onClick={() => handleMenu('2기 MVP')}>
            <Menu menuName="2기 MVP" />
          </button>
          <button  onClick={() => handleMenu('2기 Main')}>
            <Menu menuName="2기 Main" />
          </button>
        </div>
        <div className="project-display">
          {viewProject()}
        </div>
        {viewProjectInfo()}
      </div>
      
    </>
  );
}
