"use client";

import React, { useState } from "react";

const GetMembership = () => {
  const [connection, setConnection] = useState<any>();
  const [provider, setProvider] = useState();
  const [address, setAddress] = useState<any>();

  return (
    <div className="container mx-auto mt-8 p-6">
      <h2 className="text-2xl font-semibold mb-4">Get Membership</h2>
      <p className=" mb-6">
        Ready to unlock the skies and become part of our Aero Club community?
        Join us today and experience the thrill of flight, the camaraderie of
        fellow aviators, and a world of adventure waiting to be discovered.
      </p>
      <div>
        <h2 className="text-xl font-semibold mb-2">
          🛩️ Unlock the Skies with Aero Club Membership
        </h2>
        <div>
          <p className="mb-4">
            Joining our Aero Club is not just about flying; it is about
            embracing a lifestyle of adventure, camaraderie, and limitless
            horizons. Here is why becoming a member of our club is an experience
            unlike any other:
          </p>
          <p className="mb-4">
            🌟{" "}
            <span className=" font-semibold">
              Affordable Access to Aircraft:
            </span>{" "}
            As a member-run organization, we provide our members with
            cost-effective access to a fleet of aircraft, from iconic Cessna
            152s to versatile Piper Cherokees. Whether you are a seasoned pilot
            or just starting your aviation journey, our club offers convenient
            and affordable flying opportunities.
          </p>
          <p className="mb-4">
            🎓{" "}
            <span className=" font-semibold">
              Flight Training and Resources:
            </span>{" "}
            Our club is more than just a place to rent aircraft; it is a hub for
            learning and growth. Benefit from our comprehensive flight training
            programs, flight planning facilities, and pilot supplies. Our
            experienced instructors are dedicated to helping you achieve your
            aviation goals and ensuring you have the skills and knowledge to
            soar confidently through the skies.
          </p>

          <p className="mb-4">
            🚀{" "}
            <span className=" font-semibold">Social Community and Events:</span>{" "}
            Joining our Aero Club means joining a vibrant community of aviation
            enthusiasts. From fly-ins and fly-outs to social gatherings and
            events, you will have the chance to connect with fellow members who
            share your passion for flight. Whether swapping stories in the
            clubhouse or embarking on group adventures, the friendships you ll
            forge here will last a lifetime.
          </p>

          <p className="mb-4">
            ✈️ <span className=" font-semibold">Diverse Aircraft Options:</span>{" "}
            Our club caters to a wide range of aviation interests, with access
            to various aircraft types, including vintage planes, aerobatic
            aircraft, helicopters, and gliders. Whatever your flying
            preferences, we have the aircraft to match, allowing you to explore
            new horizons and experience the thrill of flight in different ways.
          </p>

          <p className=" mb-4">
            🌎{" "}
            <span className=" font-semibold">
              Gateway to Aviation Excellence :
            </span>{" "}
            Many commercial pilots have launched their careers from flying
            clubs, and our Aero Club is no exception. Whether you dream of
            flying professionally or simply want to enhance your skills and
            knowledge, our club provides the perfect foundation for aspiring
            aviators to take flight.
          </p>
          <p>
            Experience the freedom of flight and the thrill of adventure with
            Aero Club membership. Whether you are a seasoned aviator or a
            newcomer to the skies, there is no better time to join our community
            and embark on an unforgettable journey through the clouds. Unlock
            the skies and join us in reaching new heights together! 🛫✨
          </p>
        </div>
      </div>
      <button className="bg-blue-500 mt-4 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
        Get Membership
      </button>
    </div>
  );
};

export default GetMembership;
