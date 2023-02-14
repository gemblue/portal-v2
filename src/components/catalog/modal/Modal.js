const Modal = ({ children, title, id }) => {
    return (
        <div className="modal fade" id={id} tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="ModalLabel" aria-hidden="true" style={{ width: '100%' }}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header p-0 m-0 position-relative">
                        <button type="button" className="btn-close position-absolute bg-light end-0" style={{zIndex: '100'}} data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body p-0 m-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
