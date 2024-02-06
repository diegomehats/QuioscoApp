/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/QuioscoProvider.jsx":
/*!*************************************!*\
  !*** ./context/QuioscoProvider.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuioscoProvider: () => (/* binding */ QuioscoProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst QuioscoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst QuioscoProvider = ({ children })=>{\n    const [categorias, setCategorias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categoriaActual, setCategoriaActual] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [producto, setProducto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pedido, setPedido] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const obtenerCategorias = async ()=>{\n        const { data } = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/categorias\");\n        setCategorias(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        obtenerCategorias();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategoriaActual(categorias[0]);\n    }, [\n        categorias\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const nuevoTotal = pedido.reduce((total, producto)=>producto.precio * producto.cantidad + total, 0);\n        setTotal(nuevoTotal);\n    }, [\n        pedido\n    ]);\n    const handleClickCategoria = (id)=>{\n        const categoria = categorias.filter((cat)=>cat.id === id);\n        setCategoriaActual(categoria[0]);\n        router.push(\"/\");\n    };\n    const handleSetProducto = (producto)=>{\n        setProducto(producto);\n    };\n    const handleChangeModal = ()=>{\n        setModal(!modal);\n    };\n    const handleAgregarPedido = ({ categoriaId, ...producto })=>{\n        /* comprueba si el producto ya existe para actualizar la catidad */ if (pedido.some((productoState)=>productoState.id === producto.id)) {\n            const pedidoActualizado = pedido.map((productoState)=>productoState.id === producto.id ? producto : productoState);\n            setPedido(pedidoActualizado);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Guardado Correctamente\");\n        } else {\n            setPedido([\n                ...pedido,\n                producto\n            ]);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Agregando pedido\");\n        }\n        setModal(false);\n    };\n    const handleEditarCantidades = (id)=>{\n        const productoActualizar = pedido.filter((producto)=>producto.id === id);\n        setProducto(productoActualizar[0]);\n        setModal(!modal);\n    };\n    const handleEliminarProducto = (id)=>{\n        const pedidoActualizado = pedido.filter((producto)=>producto.id !== id);\n        setPedido(pedidoActualizado);\n    };\n    const colocarOrden = async (e)=>{\n        e.preventDefault();\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/ordenes\", {\n                pedido,\n                nombre,\n                total,\n                fecha: Date.now().toString()\n            });\n            //Resetear la app\n            setCategoriaActual(categorias[0]);\n            setPedido([]);\n            setNombre(\"\");\n            setTotal(0);\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Pedido realizado correctamente\");\n            setTimeout(()=>{\n                router.push(\"/\");\n            }, 3000);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuioscoContext.Provider, {\n        value: {\n            categorias,\n            categoriaActual,\n            handleClickCategoria,\n            producto,\n            handleSetProducto,\n            modal,\n            handleChangeModal,\n            handleAgregarPedido,\n            pedido,\n            handleEditarCantidades,\n            handleEliminarProducto,\n            nombre,\n            setNombre,\n            colocarOrden,\n            total\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\quioscoapp\\\\context\\\\QuioscoProvider.jsx\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuioscoContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1F1aW9zY29Qcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDL0I7QUFDYTtBQUNDO0FBS3ZDLE1BQU1NLCtCQUFnQkosb0RBQWFBO0FBR25DLE1BQU1LLGtCQUFpQixDQUFDLEVBQUNDLFFBQVEsRUFBQztJQUU5QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNXLGlCQUFpQkMsbUJBQW1CLEdBQUVaLCtDQUFRQSxDQUFDLENBQUM7SUFDdkQsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDZSxPQUFPQyxTQUFTLEdBQUVoQiwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUVsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3RDLE1BQU0sQ0FBQ21CLFFBQVFDLFVBQVUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3FCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU11QixTQUFTbEIsc0RBQVNBO0lBRXhCLE1BQU1tQixvQkFBb0I7UUFDZCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU10QixpREFBS0EsQ0FBQztRQUM3Qk8sY0FBY2U7SUFFMUI7SUFDSXhCLGdEQUFTQSxDQUFDO1FBQ051QjtJQUNKLEdBQUcsRUFBRTtJQUVMdkIsZ0RBQVNBLENBQUM7UUFDTlcsbUJBQW1CSCxVQUFVLENBQUMsRUFBRTtJQUNwQyxHQUFHO1FBQUNBO0tBQVc7SUFFZlIsZ0RBQVNBLENBQUM7UUFDRixNQUFPeUIsYUFBYVQsT0FBT1UsTUFBTSxDQUFDLENBQUNOLE9BQU9SLFdBQWEsU0FBVWUsTUFBTSxHQUFJZixTQUFTZ0IsUUFBUSxHQUFJUixPQUFPO1FBQ3ZHQyxTQUFVSTtJQUNsQixHQUFHO1FBQUNUO0tBQU87SUFFWCxNQUFNYSx1QkFBdUJDLENBQUFBO1FBQ3pCLE1BQU1DLFlBQVl2QixXQUFXd0IsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJSCxFQUFFLEtBQUtBO1FBQ3REbkIsbUJBQW1Cb0IsU0FBUyxDQUFDLEVBQUU7UUFDL0JULE9BQU9ZLElBQUksQ0FBQztJQUNoQjtJQUVBLE1BQU1DLG9CQUFvQnZCLENBQUFBO1FBQ3RCQyxZQUFZRDtJQUNoQjtJQUVBLE1BQU13QixvQkFBb0I7UUFDdEJyQixTQUFTLENBQUNEO0lBQ2Q7SUFFQSxNQUFNdUIsc0JBQXNCLENBQUMsRUFBQ0MsV0FBVyxFQUFFLEdBQUcxQixVQUFTO1FBQ25ELGlFQUFpRSxHQUNqRSxJQUFHSSxPQUFPdUIsSUFBSSxDQUFDQyxDQUFBQSxnQkFBZ0JBLGNBQWNWLEVBQUUsS0FBS2xCLFNBQVNrQixFQUFFLEdBQUU7WUFDN0QsTUFBTVcsb0JBQW9CekIsT0FBTzBCLEdBQUcsQ0FBQ0YsQ0FBQUEsZ0JBQWlCQSxjQUFjVixFQUFFLEtBQUlsQixTQUFTa0IsRUFBRSxHQUFHbEIsV0FBVzRCO1lBQ25HdkIsVUFBVXdCO1lBQ1Z0QyxpREFBS0EsQ0FBQ3dDLE9BQU8sQ0FBQztRQUNsQixPQUNTO1lBQ0wxQixVQUFVO21CQUFJRDtnQkFBUUo7YUFBUztZQUMvQlQsaURBQUtBLENBQUN3QyxPQUFPLENBQUM7UUFDbEI7UUFFQTVCLFNBQVM7SUFFYjtJQUVELE1BQU02Qix5QkFBeUJkLENBQUFBO1FBQzlCLE1BQU1lLHFCQUFxQjdCLE9BQU9nQixNQUFNLENBQUNwQixDQUFBQSxXQUFZQSxTQUFTa0IsRUFBRSxLQUFLQTtRQUNyRWpCLFlBQVlnQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ2pDOUIsU0FBUyxDQUFDRDtJQUVYO0lBRUEsTUFBTWdDLHlCQUF5QmhCLENBQUFBO1FBQzlCLE1BQU1XLG9CQUFvQnpCLE9BQU9nQixNQUFNLENBQUNwQixDQUFBQSxXQUFZQSxTQUFTa0IsRUFBRSxLQUFLQTtRQUNwRWIsVUFBVXdCO0lBQ1g7SUFFQSxNQUFNTSxlQUFlLE9BQU9DO1FBQzNCQSxFQUFFQyxjQUFjO1FBRWhCLElBQUk7WUFDSCxNQUFNL0Msa0RBQVUsQ0FBQyxnQkFBZ0I7Z0JBQUNjO2dCQUFRRTtnQkFBUUU7Z0JBQU8rQixPQUFNQyxLQUFLQyxHQUFHLEdBQUdDLFFBQVE7WUFBRTtZQUdwRixpQkFBaUI7WUFDakIzQyxtQkFBbUJILFVBQVUsQ0FBQyxFQUFFO1lBQ2hDUyxVQUFVLEVBQUU7WUFDWkUsVUFBVTtZQUNWRSxTQUFTO1lBRVRsQixpREFBS0EsQ0FBQ3dDLE9BQU8sQ0FBQztZQUVkWSxXQUFXO2dCQUNSakMsT0FBT1ksSUFBSSxDQUFDO1lBQ2YsR0FBRztRQUdKLEVBQUUsT0FBT3NCLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBSUEscUJBRUksOERBQUNuRCxlQUFlc0QsUUFBUTtRQUNwQkMsT0FBTztZQUNIcEQ7WUFDQUU7WUFDQW1CO1lBQ0FqQjtZQUNBdUI7WUFDQXJCO1lBQ0FzQjtZQUNBQztZQUNBckI7WUFDQTRCO1lBQ0FFO1lBQ0E1QjtZQUNBQztZQUNBNEI7WUFDQTNCO1FBRUo7a0JBR0NiOzs7Ozs7QUFJYjtBQUd3QjtBQUV4QixpRUFBZUYsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aW9zY29hcHAvLi9jb250ZXh0L1F1aW9zY29Qcm92aWRlci5qc3g/OWQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgUXVpb3Njb0NvbnRleHQ9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuXHJcbmNvbnN0IFF1aW9zY29Qcm92aWRlcj0gKHtjaGlsZHJlbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmlhcywgc2V0Q2F0ZWdvcmlhc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjYXRlZ29yaWFBY3R1YWwsIHNldENhdGVnb3JpYUFjdHVhbF09IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW3Byb2R1Y3RvLCBzZXRQcm9kdWN0b10gPSB1c2VTdGF0ZSh7fSlcclxuICAgIGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwZWRpZG8sIHNldFBlZGlkb109IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3Qgb2J0ZW5lckNhdGVnb3JpYXMgPSBhc3luYyAoKSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MoJy9hcGkvY2F0ZWdvcmlhcycpXHJcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWFzKGRhdGEpXHJcblxyXG4gICAgfVxyXG4gICAgICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgICBvYnRlbmVyQ2F0ZWdvcmlhcygpXHJcbiAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpYUFjdHVhbChjYXRlZ29yaWFzWzBdKVxyXG4gICAgICAgIH0sIFtjYXRlZ29yaWFzXSlcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICBudWV2b1RvdGFsID0gcGVkaWRvLnJlZHVjZSgodG90YWwsIHByb2R1Y3RvKSA9PiAocHJvZHVjdG8ucHJlY2lvICAqIHByb2R1Y3RvLmNhbnRpZGFkKSArIHRvdGFsLCAwIClcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsIChudWV2b1RvdGFsKVxyXG4gICAgICAgIH0sIFtwZWRpZG9dKVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVDbGlja0NhdGVnb3JpYSA9IGlkICA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpYSA9IGNhdGVnb3JpYXMuZmlsdGVyKGNhdCA9PiBjYXQuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yaWFBY3R1YWwoY2F0ZWdvcmlhWzBdKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVNldFByb2R1Y3RvID0gcHJvZHVjdG8gPT4ge1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0byhwcm9kdWN0bylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRNb2RhbCghbW9kYWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVBZ3JlZ2FyUGVkaWRvID0gKHtjYXRlZ29yaWFJZCwgLi4ucHJvZHVjdG99KSA9PiB7XHJcbiAgICAgICAgICAgIC8qIGNvbXBydWViYSBzaSBlbCBwcm9kdWN0byB5YSBleGlzdGUgcGFyYSBhY3R1YWxpemFyIGxhIGNhdGlkYWQgKi9cclxuICAgICAgICAgICAgaWYocGVkaWRvLnNvbWUocHJvZHVjdG9TdGF0ZT0+IHByb2R1Y3RvU3RhdGUuaWQgPT09IHByb2R1Y3RvLmlkKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZWRpZG9BY3R1YWxpemFkbyA9IHBlZGlkby5tYXAocHJvZHVjdG9TdGF0ZSA9PiBwcm9kdWN0b1N0YXRlLmlkPT09IHByb2R1Y3RvLmlkID8gcHJvZHVjdG8gOiBwcm9kdWN0b1N0YXRlKVxyXG4gICAgICAgICAgICAgICAgc2V0UGVkaWRvKHBlZGlkb0FjdHVhbGl6YWRvKVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkd1YXJkYWRvIENvcnJlY3RhbWVudGVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQZWRpZG8oWy4uLnBlZGlkbywgcHJvZHVjdG9dKVxyXG4gICAgICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnQWdyZWdhbmRvIHBlZGlkbycpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgY29uc3QgaGFuZGxlRWRpdGFyQ2FudGlkYWRlcyA9IGlkID0+IHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0b0FjdHVhbGl6YXIgPSBwZWRpZG8uZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkID09PSBpZClcclxuICAgICAgICBzZXRQcm9kdWN0byhwcm9kdWN0b0FjdHVhbGl6YXJbMF0pXHJcbiAgICAgICAgc2V0TW9kYWwoIW1vZGFsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBjb25zdCBoYW5kbGVFbGltaW5hclByb2R1Y3RvID0gaWQgPT57XHJcbiAgICAgICAgY29uc3QgcGVkaWRvQWN0dWFsaXphZG89ICBwZWRpZG8uZmlsdGVyKHByb2R1Y3RvID0+IHByb2R1Y3RvLmlkICE9PSBpZClcclxuICAgICAgICBzZXRQZWRpZG8ocGVkaWRvQWN0dWFsaXphZG8pXHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgY29uc3QgY29sb2Nhck9yZGVuID0gYXN5bmMgKGUpPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9vcmRlbmVzJywge3BlZGlkbywgbm9tYnJlLCB0b3RhbCwgZmVjaGE6RGF0ZS5ub3coKS50b1N0cmluZygpfSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIC8vUmVzZXRlYXIgbGEgYXBwXHJcbiAgICAgICAgIHNldENhdGVnb3JpYUFjdHVhbChjYXRlZ29yaWFzWzBdKVxyXG4gICAgICAgICBzZXRQZWRpZG8oW10pXHJcbiAgICAgICAgIHNldE5vbWJyZSgnJylcclxuICAgICAgICAgc2V0VG90YWwoMClcclxuXHJcbiAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1BlZGlkbyByZWFsaXphZG8gY29ycmVjdGFtZW50ZScpXHJcblxyXG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICB9LCAzMDAwKVxyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxRdWlvc2NvQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhcyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYUFjdHVhbCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrQ2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTZXRQcm9kdWN0byxcclxuICAgICAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlTW9kYWwsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVBZ3JlZ2FyUGVkaWRvLFxyXG4gICAgICAgICAgICAgICAgcGVkaWRvLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRWRpdGFyQ2FudGlkYWRlcyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUVsaW1pbmFyUHJvZHVjdG8sXHJcbiAgICAgICAgICAgICAgICBub21icmUsXHJcbiAgICAgICAgICAgICAgICBzZXROb21icmUsXHJcbiAgICAgICAgICAgICAgICBjb2xvY2FyT3JkZW4sXHJcbiAgICAgICAgICAgICAgICB0b3RhbCxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1F1aW9zY29Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7UXVpb3Njb1Byb3ZpZGVyfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpb3Njb0NvbnRleHQiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiYXhpb3MiLCJ0b2FzdCIsInVzZVJvdXRlciIsIlF1aW9zY29Db250ZXh0IiwiUXVpb3Njb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXRlZ29yaWFzIiwic2V0Q2F0ZWdvcmlhcyIsImNhdGVnb3JpYUFjdHVhbCIsInNldENhdGVnb3JpYUFjdHVhbCIsInByb2R1Y3RvIiwic2V0UHJvZHVjdG8iLCJtb2RhbCIsInNldE1vZGFsIiwicGVkaWRvIiwic2V0UGVkaWRvIiwibm9tYnJlIiwic2V0Tm9tYnJlIiwidG90YWwiLCJzZXRUb3RhbCIsInJvdXRlciIsIm9idGVuZXJDYXRlZ29yaWFzIiwiZGF0YSIsIm51ZXZvVG90YWwiLCJyZWR1Y2UiLCJwcmVjaW8iLCJjYW50aWRhZCIsImhhbmRsZUNsaWNrQ2F0ZWdvcmlhIiwiaWQiLCJjYXRlZ29yaWEiLCJmaWx0ZXIiLCJjYXQiLCJwdXNoIiwiaGFuZGxlU2V0UHJvZHVjdG8iLCJoYW5kbGVDaGFuZ2VNb2RhbCIsImhhbmRsZUFncmVnYXJQZWRpZG8iLCJjYXRlZ29yaWFJZCIsInNvbWUiLCJwcm9kdWN0b1N0YXRlIiwicGVkaWRvQWN0dWFsaXphZG8iLCJtYXAiLCJzdWNjZXNzIiwiaGFuZGxlRWRpdGFyQ2FudGlkYWRlcyIsInByb2R1Y3RvQWN0dWFsaXphciIsImhhbmRsZUVsaW1pbmFyUHJvZHVjdG8iLCJjb2xvY2FyT3JkZW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZmVjaGEiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/QuioscoProvider.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_QuioscoProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/QuioscoProvider */ \"./context/QuioscoProvider.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_QuioscoProvider__WEBPACK_IMPORTED_MODULE_2__]);\n_context_QuioscoProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_QuioscoProvider__WEBPACK_IMPORTED_MODULE_2__.QuioscoProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\quioscoapp\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\quioscoapp\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDOEI7QUFFNUQsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFFRSw4REFBQ0gscUVBQWVBO2tCQUNaLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWlvc2NvYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgUXVpb3Njb1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9RdWlvc2NvUHJvdmlkZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuXG4gICAgPFF1aW9zY29Qcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgPC9RdWlvc2NvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJRdWlvc2NvUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();