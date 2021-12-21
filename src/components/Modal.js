import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useModal from "../hooks/useModal";

const Modal = () => {
  const { posts, isOpen } = useContext(GlobalContext);
  const { closeModal } = useModal();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-90" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full bg-black max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div className="ml-4">
                  <button
                    type="button"
                    className="rounded-full h-5 w-5 my-2 flex items-center justify-center bg-gray-300"
                    onClick={closeModal}
                  >
                    <i className="fas fa-times-circle"></i>
                  </button>
                </div>
                <Slider {...settings}>
                  {posts && posts.map((post, i) => <Slide post={post} />)}
                </Slider>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
