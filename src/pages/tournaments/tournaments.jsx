import React from "react";
// import TheMasters2 from "./full info/themaster2";
// import TheOpen2 from "./full info/theopen2";
// import UsPga2 from "./full info/uspga2";
// import OpenChamp2 from "./full info/openchamp2";
import Pyramid from "./global/tournamentPyramid";

const Competiton = () => {
  // Create rows for the pyramid
  const items = [
    {
      name: "The British Open",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The US Open",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Masters",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The PGA Championship",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Ryder Cup",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Players Championship",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Tour Championship",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Memorial Championship",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The Arnold Palmer Invitational",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
    {
      name: "The BMW PGA Championship",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed molestie neque non scelerisque ultricies nisl dolor euismod sapien in faucibus nisi elit et risus sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam sed ac semper nisi ut quis nisi ac nisi vulputate aliquam nullam eget nisl ac ante hendrerit aliquam",
    },
  ];

  return (
    <div className="mb-10">
      <Pyramid items={items} />
    </div>
  );
};

//map all the dialogues and make individual pages which are maped with links
export default Competiton;
