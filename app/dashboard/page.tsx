import GreetingsBlock from "@/components/blocks/greetings.block.component";
import SectionLayout from "@/components/blocks/section.layout.component";
import BlankFileIcon from "@/components/icons/blank-file.icons.component";
import ImageIcon from "@/components/icons/image.icon.component";
import PdfIcon from "@/components/icons/pdf.icons.component";
import VideoIcon from "@/components/icons/video.icon.component";
import FiletypeCard from "@/components/ui/filetype.card.ui.component";
import Folders from "@/components/ui/folders.ui.component";
import React from "react";

function DasboardPage() {
  return (
    <section className="w-full h-full flex flex-col gap-[29px]">
      <GreetingsBlock username="Nikhil" />
      <SectionLayout title="Total files">
        <FiletypeCard
          typename="Images"
          number={125}
          icon={<ImageIcon className="w-6.5 h-6.5" />}
        />
        <FiletypeCard
          typename="Pdf"
          number={125}
          icon={<PdfIcon className="w-6.5 h-6.5" />}
        />
        <FiletypeCard
          typename="videos"
          number={125}
          icon={<VideoIcon className="w-6.5 h-6.5" />}
        />
        <FiletypeCard
          typename="Documents"
          number={125}
          icon={<BlankFileIcon className="w-6.5 h-6.5" />}
        />
      </SectionLayout>
      <SectionLayout title="Suggested folders">
        <Folders foldername="Public" path="O:/myatmos/public" />
        <Folders foldername="Academics" path="O:/myatmos/academics" />
        <Folders foldername="Friends" path="O:/myatmos/personal/friends/fejoi/fewoj0iejg/mvoijowg" />
        <Folders foldername="Family" path="O:/myatmos/personal/family" />
      </SectionLayout>
    </section>
  );
}

export default DasboardPage;
